﻿using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using CMS.Ecommerce;
using CMS.Helpers;
using CMS.Localization;
using Kadena.Models.Product;
using Kadena.WebAPI.KenticoProviders.Contracts;

namespace Kadena.WebAPI.KenticoProviders.Providers
{
    public class KenticoSkuProvider : IKenticoSkuProvider
    {
        private readonly IMapper mapper;

        public KenticoSkuProvider(IMapper mapper)
        {
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        public Sku GetSKU(int skuId)
        {
            var skuInfo = SKUInfoProvider.GetSKUInfo(skuId);
            return mapper.Map<Sku>(skuInfo);
        }

        public void UpdateSkuMandatoryFields(Sku sku)
        {
            var skuInfo = SKUInfoProvider.GetSKUInfo(sku.SkuId);
            if (skuInfo == null)
            {
                return;
            }

            skuInfo.SKUWeight = sku.Weight;
            skuInfo.SKUNeedsShipping = sku.NeedsShipping;
            skuInfo.SetValue("SKUNumberOfItemsInPackage", sku.NumberOfItemsInPackage);
            skuInfo.Update();
        }

        public Sku GetVariant(int skuId, IEnumerable<int> optionIds)
        {
            var attributeSet = new ProductAttributeSet(optionIds);
            var variant = VariantHelper.GetProductVariant(skuId, attributeSet);
            return mapper.Map<Sku>(variant);
        }
        public void SetSkuAvailableQty(int skuid, int qty)
        {
            SKUInfo sku = SKUInfoProvider.GetSKUInfo(skuid);
            if (sku != null)
            {
                sku.SKUAvailableItems = sku.SKUAvailableItems - qty;
                sku.Update();
            }
        }

        public int GetSkuAvailableQty(int skuid)
        {
            SKUInfo sku = SKUInfoProvider.GetSKUInfo(skuid);
            return sku != null ? sku.SKUAvailableItems : 0;
        }

        public void SetSkuAvailableQty(string skunumber, int availableItems)
        {
            var sku = SKUInfoProvider.GetSKUs().WhereEquals("SKUNumber", skunumber).FirstOrDefault();

            if (sku != null)
            {
                sku.SKUAvailableItems = availableItems;
                sku.SubmitChanges(false);
                sku.MakeComplete(true);
                sku.Update();
            }
        }

        public Price GetSkuPrice(int skuId)
        {
            var sku = SKUInfoProvider.GetSKUInfo(skuId);
            if (sku == null)
            {
                return null;
            }

            return new Price
            {
                Value = Convert.ToDecimal(sku.SKUPrice),
                Prefix = ResHelper.GetString("Kadena.Checkout.ItemPricePrefix", LocalizationContext.CurrentCulture.CultureCode)
            };
        }
    }
}