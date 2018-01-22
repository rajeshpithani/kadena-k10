﻿using CMS.Ecommerce;
using CMS.EventLog;
using CMS.Helpers;
using CMS.PortalEngine.Web.UI;
using Kadena.Dto.General;
using Kadena.Dto.SubmitOrder.MicroserviceRequests;
using Kadena.Old_App_Code.Kadena.Constants;
using Kadena.Old_App_Code.Kadena.Enums;
using Kadena.Old_App_Code.Kadena.Shoppingcart;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.UI.WebControls;

namespace Kadena.CMSWebParts.Kadena.Cart
{
    public partial class CartCheckout : CMSAbstractWebPart
    {
        private const string _serviceUrlSettingKey = "KDA_OrderServiceEndpoint";
        #region properties
        private ShoppingCartInfo Cart { get; set; }
        /// <summary>
        /// Checkout button text
        /// </summary>
        public string CheckoutButtonText
        {
            get
            {
                return ResHelper.GetString("KDA.CartCheckout.CheckoutButtonText");
            }
            set
            {
                SetValue("CheckoutButtonText", value);
            }
        }
        /// <summary>
        /// popup close button text
        /// </summary>
        public string PopupCloseButtonText
        {
            get
            {
                return ResHelper.GetString("KDA.CartCheckout.PopupCloseButtonText");
            }
            set
            {
                SetValue("PopupCloseButtonText", value);
            }
        }
        #endregion
        #region Events
        /// <summary>
        /// Page load event
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            divErrorDailogue.Attributes.Add("class", "dialog");
        }
        /// <summary>
        /// Chekcou click event for order processing
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void lnkCheckout_Click(object sender, EventArgs e)
        {
            try
            {
                var loggedInUserCartIDs = ShoppingCartHelper.GetLoggeedInUserCarts(CurrentUser.UserID, ProductType.GeneralInventory);
                var unprocessedDistributorIDs = new List<Tuple<int, string>>();
                loggedInUserCartIDs.ForEach(care =>
                {
                    Cart = ShoppingCartInfoProvider.GetShoppingCartInfo(care);
                    var response = ProcessOrder();
                    if (response != null && response.Success)
                    {
                        ShoppingCartInfoProvider.DeleteShoppingCartInfo(Cart);
                    }
                    else
                    {
                        unprocessedDistributorIDs.Add(new Tuple<int, string>(Cart.GetIntegerValue("ShoppingCartDistributorID", default(int)), response.ErrorMessages));
                    }
                });
                if (unprocessedDistributorIDs.Count == 0)
                {
                    lblCartUpdateSuccess.Text = ResHelper.GetString("KDA.Checkout.OrderSuccess");
                }
                else
                {
                    ShowOrderErrorList(unprocessedDistributorIDs);
                }
                divErrorDailogue.Attributes.Add("class", "dialog active");
            }
            catch (Exception ex)
            {
                EventLogProvider.LogInformation("Kadena_CMSWebParts_Kadena_Cart_CartCheckout", "lnkCheckout_Click", ex.Message);
            }
        }
        /// <summary>
        /// popup click close event
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void btnClose_ServerClick(object sender, EventArgs e)
        {
            Response.Redirect(Request.RawUrl);
        }
        #endregion Events

        #region Methods

        /// <summary>
        ///Processes order and returns response
        /// </summary>
        /// <returns></returns>
        private BaseResponseDto<string> ProcessOrder()
        {
            try
            {
                OrderDTO Ordersdto = ShoppingCartHelper.CreateOrdersDTO(Cart, CurrentUser.UserID, OrderType.generalInventory);
                if (Ordersdto != null && Ordersdto.Campaign != null)
                {
                    UpdateDistributorsBusinessUnit(Ordersdto.Campaign.DistributorID);
                }
                var response = ShoppingCartHelper.CallOrderService(Ordersdto);
                return response;
            }
            catch (Exception ex)
            {
                EventLogProvider.LogInformation("Kadena_CMSWebParts_Kadena_Cart_CartCheckout", "ProcessOrder", ex.Message);
                return null;
            }
        }
        /// <summary>
        /// displays the unprocessed order distributors names
        /// </summary>
        /// <param name="addresses"></param>
        private void ShowOrderErrorList(List<Tuple<int, string>> unprocessedDistributorIDs)
        {
            try
            {

                var distributors = AddressInfoProvider.GetAddresses().WhereIn("AddressID", unprocessedDistributorIDs.Select(x => x.Item1).ToList())
                    .Columns("AddressPersonalName,AddressID").ToList().Select(x =>
                    {
                        return new { AddressID = x?.AddressID, AddressPersonalName = x?.AddressPersonalName };
                    }).ToList();
                rptErrors.DataSource = unprocessedDistributorIDs.Select(x =>
               {
                   var distributor = distributors.Where(y => y.AddressID == x.Item1).FirstOrDefault();
                   return new
                   {
                       AddressPersonalName = distributor.AddressPersonalName,
                       Reason = x.Item2
                   };
               }).ToList();
                rptErrors.DataBind();
            }
            catch (Exception ex)
            {
                EventLogProvider.LogInformation("Kadena_CMSWebParts_Kadena_Cart_CartCheckout", "ShowError", ex.Message);
            }
        }

        /// <summary>
        /// Updates business unit for distributor
        /// </summary>
        /// <param name="distributorID">Distributor ID</param>
        private void UpdateDistributorsBusinessUnit(int distributorID)
        {
            AddressInfo distributor = AddressInfoProvider.GetAddressInfo(distributorID);
            long businessUnitNumber = ValidationHelper.GetLong(Cart.GetValue("BusinessUnitIDForDistributor"), default(long));
            if (distributor != null && businessUnitNumber != default(long))
            {
                distributor.SetValue("BusinessUnit", businessUnitNumber);
                AddressInfoProvider.SetAddressInfo(distributor);
            }
        }

        #endregion Methods
      
    }
}