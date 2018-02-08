﻿using CMS.Ecommerce;
using CMS.EventLog;
using CMS.Scheduler;
using Kadena.Old_App_Code.Kadena.Constants;
using Kadena.Old_App_Code.Kadena.EmailNotifications;
using Kadena.Old_App_Code.Kadena.Enums;
using Kadena.Old_App_Code.Kadena.Shoppingcart;
using System;
using System.Collections.Generic;
using System.Linq;
using CMS.Helpers;
using CMS.SiteProvider;
using Kadena.Dto.SubmitOrder.MicroserviceRequests;
using Kadena2.Container.Default;
using Kadena.WebAPI.KenticoProviders.Contracts;
using Kadena.BusinessLogic.Contracts;
using CMS.CustomTables.Types.KDA;
using CMS.CustomTables;

namespace Kadena.Old_App_Code.Kadena.CustomScheduledTasks
{
    public class GeneratePrebuyOrder : ITask
    {
        private ShoppingCartInfo Cart { get; set; }
        /// <summary>
        /// Executes the task for generationg ordeers.
        /// </summary>
        /// <param name="ti">Info object representing the scheduled task</param>
        public string Execute(TaskInfo taskInfo)
        {
            try
            {
                var taskData = taskInfo.TaskData.Split('|');
                var openCampaign = ValidationHelper.GetInteger(taskData[0], 0);
                var campaignClosingUserID = ValidationHelper.GetInteger(taskData[1], 0);
                var orderResponse = GenerateOrder(openCampaign, campaignClosingUserID);
                return orderResponse;
            }
            catch (Exception ex)
            {
                EventLogProvider.LogException("GeneratePrebuyOrderTask", "Execute", ex, SiteContext.CurrentSiteID, ex.Message);
                return ex.Message;
            }
        }
        /// <summary>
        /// This method  will do order processing
        /// </summary>
        /// <param name="openCampaignID"></param>
        /// <param name="campaignClosingUserID"></param>
        /// <returns></returns>
        private string GenerateOrder(int openCampaignID, int campaignClosingUserID)
        {
            try
            {
                var shoppingCartInfo = DIContainer.Resolve<IShoppingCartProvider>();
                var addrerss = DIContainer.Resolve<IAddressBookService>();
                var userInfo = DIContainer.Resolve<IKenticoUserProvider>();
                var usersWithShoppingCartItems = shoppingCartInfo.GetUserIDsWithShoppingCart(openCampaignID,Convert.ToInt32(ProductsType.PreBuy));
                var orderTemplateSettingKey=DIContainer.Resolve<IKenticoResourceService>().GetSettingsKey("KDA_OrderReservationEmailTemplate");
                var failedOrderTemplateSettingKey = DIContainer.Resolve<IKenticoResourceService>().GetSettingsKey("KDA_FailedOrdersEmailTemplate");
                var failedOrdersUrl = DIContainer.Resolve<IKenticoResourceService>().GetSettingsKey("KDA_FailedOrdersPageUrl");
                var unprocessedDistributorIDs = new List<Tuple<int, string>>();
                usersWithShoppingCartItems.ForEach(shoppingCartUser =>
                {
                    var salesPerson = userInfo.GetUserByUserId(shoppingCartUser);
                    var loggedInUserCartIDs = ShoppingCartHelper.GetCartsByUserID(shoppingCartUser, ProductType.PreBuy, openCampaignID);
                    loggedInUserCartIDs.ForEach(cart =>
                    {
                        var shippingCost = default(decimal);
                        Cart = ShoppingCartInfoProvider.GetShoppingCartInfo(cart);
                        OrderDTO ordersDTO = ShoppingCartHelper.CreateOrdersDTO(Cart, Cart.ShoppingCartUserID, OrderType.prebuy, shippingCost);
                        var response = ShoppingCartHelper.ProcessOrder(Cart, Cart.ShoppingCartUserID, OrderType.prebuy, ordersDTO, shippingCost);
                        if (response != null && response.Success)
                        {
                            ordersDTO.OrderID = response.Payload;
                            ProductEmailNotifications.SendEmailNotification(ordersDTO, orderTemplateSettingKey, salesPerson);
                            ShoppingCartInfoProvider.DeleteShoppingCartInfo(Cart);
                        }
                        else
                        {
                            unprocessedDistributorIDs.Add(new Tuple<int, string>(Cart.GetIntegerValue("ShoppingCartDistributorID", default(int)), response.ErrorMessages));
                        }
                    });
                });
                var distributors = addrerss.GetAddressesByAddressIds(unprocessedDistributorIDs.Select(x => x.Item1).ToList()).Select(x =>
                {
                    return new { AddressID = x?.Id, AddressPersonalName = x?.AddressPersonalName };
                }).ToList();
                var listofFailedOrders = unprocessedDistributorIDs.Select(x =>
                  {
                      var distributor = distributors.Where(y => y.AddressID == x.Item1).FirstOrDefault();
                      return new
                      {
                          Name = distributor.AddressPersonalName,
                          Reason = x.Item2
                      };
                  }).ToList();
                var user = userInfo.GetUserByUserId(campaignClosingUserID);
                if (user?.Email != null && listofFailedOrders.Count > 0)
                {
                    object[,] orderdata = { {"url", URLHelper.AddHTTPToUrl($"{SiteContext.CurrentSite.DomainName}{failedOrdersUrl}?campid={openCampaignID}") } ,
                                                             { "failedordercount",listofFailedOrders.Count}           };
                    UpdatetFailedOrders(openCampaignID, true);
                    ProductEmailNotifications.SendEmail(failedOrderTemplateSettingKey, user?.Email, listofFailedOrders, orderdata);
                }
                   
                return ResHelper.GetString("KDA.OrderSchedular.TaskSuccessfulMessage");
            }
            catch (Exception ex)
            {
                EventLogProvider.LogException("GeneratePrebuyOrderTask", "GenerateOrder", ex, SiteContext.CurrentSiteID, ex.Message);
                return ex.Message;
            }
        }
        private void UpdatetFailedOrders(int campaignID,bool IsFailed)
        {
            try
            {
                var foData = CustomTableItemProvider.GetItems<FailedOrdersItem>().WhereEquals("CapmaignID", campaignID).FirstOrDefault();
                if (!DataHelper.DataSourceIsEmpty(foData))
                {
                    foData.IsCampaignOrdersInProgress = false;
                    if(IsFailed)
                    {
                        foData.IsCampaignOrdersFailed = true;
                    }
                    else
                    {
                        foData.IsCampaignOrdersFailed = false;
                    }
                    foData.Update();
                }  
            }
            catch (Exception ex)
            {
                EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignWebFormActions", "InsertFailedOrders", ex, SiteContext.CurrentSiteID, ex.Message);
            }

        }

    }
}