﻿using AutoMapper;
using CMS.Globalization;
using CMS.Ecommerce;
using Kadena.Models;
using CMS.Membership;
using System;
using Kadena.Models.Site;
using CMS.SiteProvider;
using Kadena.WebAPI.KenticoProviders;
using CMS.DocumentEngine;
using Kadena.Models.Product;
using CMS.Helpers;
using CMS.DataEngine;
using CMS.CustomTables;
using Kadena.Models.CreditCard;
using Kadena.Models.UserBudget;
using Kadena.Models.FyBudget;

namespace Kadena2.WebAPI.KenticoProviders
{
    public class KenticoModelMappingsProfile : Profile
    {
        public KenticoModelMappingsProfile()
        {
            CreateMap<StateInfo, State>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.StateID));
            CreateMap<CountryInfo, Country>()
                .ProjectUsing(src => new Country
                {
                    Id = src.CountryID,
                    Name = src.CountryDisplayName,
                    Code = src.CountryTwoLetterCode
                });
            CreateMap<IAddress, DeliveryAddress>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.AddressID))
                .ForMember(dest => dest.City, opt => opt.MapFrom(src => src.AddressCity))
                .ForMember(dest => dest.State, opt => opt.MapFrom(src => src))
                .ForMember(dest => dest.Country, opt => opt.MapFrom(src => src))
                .ForMember(dest => dest.Address1, opt => opt.MapFrom(src => src.AddressLine1))
                .ForMember(dest => dest.Address2, opt => opt.MapFrom(src => src.AddressLine2))
                .ForMember(dest => dest.Zip, opt => opt.MapFrom(src => src.AddressZip));
            CreateMap<IAddress, State>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.AddressStateID))
                .ForMember(dest => dest.CountryId, opt => opt.MapFrom(src => src.AddressCountryID))
                .ForMember(dest => dest.StateCode, opt => opt.MapFrom(src => src.GetStateCode()));
            CreateMap<IAddress, Country>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.AddressCountryID))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.GetCountryTwoLetterCode()));
            CreateMap<DeliveryAddress, AddressInfo>()
                .ForMember(dest => dest.AddressID, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.AddressLine1, opt => opt.MapFrom(src => src.Address1))
                .ForMember(dest => dest.AddressLine2, opt => opt.MapFrom(src => src.Address2))
                .ForMember(dest => dest.AddressCity, opt => opt.MapFrom(src => src.City))
                .ForMember(dest => dest.AddressZip, opt => opt.MapFrom(src => src.Zip))
                .ForMember(dest => dest.AddressStateID, opt => opt.MapFrom(src => src.State.Id))
                .ForMember(dest => dest.AddressCountryID, opt => opt.MapFrom(src => src.Country.Id));
            CreateMap<ShippingOptionInfo, DeliveryOption>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.ShippingOptionID))
                .ForMember(dest => dest.CarrierId, opt => opt.MapFrom(src => src.ShippingOptionCarrierID))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.ShippingOptionDisplayName))
                .ForMember(dest => dest.Service, opt => opt.MapFrom(src => src.ShippingOptionCarrierServiceName))
                .ForMember(dest => dest.SAPName, opt => opt.MapFrom(src => src.GetStringValue("ShippingOptionSAPName", string.Empty)));
            CreateMap<UserInfo, User>()
                .ForMember(dest => dest.TermsConditionsAccepted, opt => opt.MapFrom(src => src.GetDateTimeValue("TermsConditionsAccepted", DateTime.MinValue)));
            CreateMap<SiteInfo, Site>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.SiteID))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.SiteName));
            CreateMap<PaymentOptionInfo, PaymentMethod>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.PaymentOptionID))
                .ForMember(dest => dest.Disabled, opt => opt.MapFrom(src => !src.PaymentOptionEnabled))
                .ForMember(dest => dest.Icon, opt => opt.MapFrom(src => src.GetStringValue("IconResource", string.Empty)))
                .ForMember(dest => dest.DisplayName, opt => opt.MapFrom(src => src.PaymentOptionDisplayName))
                .ForMember(dest => dest.ClassName, opt => opt.MapFrom(src => src.PaymentOptionName))
                .ForMember(dest => dest.IsUnpayable, opt => opt.MapFrom(src => src.GetBooleanValue("IsUnpayable", false)))
                .AfterMap((src, dest) => dest.Checked = false);
            CreateMap<CustomerInfo, Customer>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.CustomerID))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.CustomerFirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.CustomerLastName))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.CustomerEmail))
                .ForMember(dest => dest.CustomerNumber, opt => opt.MapFrom(src => src.CustomerGUID.ToString()))
                .ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.CustomerPhone))
                .ForMember(dest => dest.UserID, opt => opt.MapFrom(src => src.CustomerUserID))
                .ForMember(dest => dest.Company, opt => opt.MapFrom(src => src.CustomerCompany))
                .ForMember(dest => dest.SiteId, opt => opt.MapFrom(src => src.CustomerSiteID))
                .ForMember(dest => dest.DefaultShippingAddressId, opt => opt.MapFrom(src => src.GetIntegerValue(KenticoUserProvider.CustomerDefaultShippingAddresIDFieldName, 0)))
                .AfterMap((src, dest) => dest.PreferredLanguage = src.CustomerUser?.PreferredCultureCode ?? string.Empty);
            CreateMap<CarrierInfo, DeliveryCarrier>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.CarrierID))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.CarrierDisplayName))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.CarrierName))
                .AfterMap((src, dest) => dest.Opened = false);
            CreateMap<TreeNode, ProductCategoryLink>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.DocumentID))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.DocumentName))
                .ForMember(dest => dest.Url, opt => opt.MapFrom(src => src.DocumentUrlPath))
                .ForMember(dest => dest.ImageUrl, opt => opt.MapFrom(src => URLHelper.GetAbsoluteUrl(src.GetValue("ProductCategoryImage", string.Empty))))
                .ForMember(dest => dest.ProductBordersEnabled, opt => opt.MapFrom(src => src.GetBooleanValue("ProductCategoryBordersEnabled", false)))
                .AfterMap((src, dest) => dest.Border = new Border { Exists = src.GetBooleanValue("ProductCategoryBordersEnabled", false) });
            CreateMap<CustomTableItem, Submission>()
                .ForMember(dest => dest.SubmissionId, opt => opt.MapFrom(src => src.GetGuidValue("SubmissionId", Guid.Empty)))
                .ForMember(dest => dest.AlreadyVerified, opt => opt.MapFrom(src => src.GetBooleanValue("AlreadyVerified", false)))
                .ForMember(dest => dest.SiteId, opt => opt.MapFrom(src => src.GetIntegerValue("SiteId", 0)))
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.GetIntegerValue("UserId", 0)))
                .ForMember(dest => dest.CustomerId, opt => opt.MapFrom(src => src.GetIntegerValue("CustomerId", 0)))
                .ForMember(dest => dest.Processed, opt => opt.MapFrom(src => src.GetBooleanValue("Processed", false)))
                .ForMember(dest => dest.OrderJson, opt => opt.MapFrom(src => src.GetStringValue("OrderJson", string.Empty)))
                .ForMember(dest => dest.RedirectUrl, opt => opt.MapFrom(src => src.GetStringValue("RedirectUrl", string.Empty)));
            CreateMap<AddressInfo, AddressData>();
        }
    }
}
