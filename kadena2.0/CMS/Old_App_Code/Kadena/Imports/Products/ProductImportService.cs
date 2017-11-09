﻿using CMS.DocumentEngine;
using CMS.Ecommerce;
using CMS.EventLog;
using CMS.Helpers;
using CMS.Localization;
using CMS.Membership;
using CMS.PortalEngine;
using Kadena.Models;
using Kadena.Models.Product;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Kadena.Old_App_Code.Kadena.Imports.Products
{
    public class ProductImportService : ImportServiceBase
    {
        protected static JsonSerializerSettings camelCaseSerializer = new JsonSerializerSettings()
        {
            Formatting = Formatting.Indented,
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
        };

        public ImportResult ProcessImportFile(byte[] importFileData, ExcelType type, int siteID)
        {
            CacheHelper.ClearCache();
            statusMessages.Clear();

            var site = GetSite(siteID);
            var rows = GetExcelRows(importFileData, type);
            var products = GetDtosFromExcelRows<ProductDto>(rows);
            
            var currentItemNumber = 0;
            foreach (var productDto in products)
            {
                currentItemNumber++;

                List<string> validationResults;
                if (!ValidateImportItem(productDto, out validationResults))
                {
                    statusMessages.Add($"Item number {currentItemNumber} has invalid values ({ string.Join("; ", validationResults) })");
                    continue;
                }

                try
                {
                    SaveProduct(productDto, siteID);
                }
                catch (Exception ex)
                {
                    statusMessages.Add($"There was an error when processing item #{currentItemNumber} : {ex.Message}");
                    EventLogProvider.LogException("Import users", "EXCEPTION", ex);
                }
            }

            CacheHelper.ClearCache();

            return new ImportResult
            {
                AllMessagesCount = statusMessages.AllMessagesCount,
                ErrorMessages = statusMessages.ToArray()
            };
        }

        private bool ValidateImportItem(ProductDto product, out List<string> validationErrors)
        {
            var errorMessageFormat = "field {0} - {1}";
            bool isValid = ValidatorHelper.ValidateDto(product, out validationErrors, errorMessageFormat);

            if (!isValid)
            {
                return false;
            }

            if (product.ProductType.Contains(ProductTypes.TemplatedProduct))
            {
                if (string.IsNullOrWhiteSpace(product.ChiliTemplateID) ||
                    string.IsNullOrWhiteSpace(product.ChiliWorkgroupID) ||
                    string.IsNullOrWhiteSpace(product.ChiliPdfGeneratorSettingsID))
                {

                    isValid = false;
                    validationErrors.Add("ChiliTemplateID, ChiliWorkgroupID and ChiliPdfGeneratorSettingsID are mandatory for Templated product");
                }
            }

            /* TODO discuss with Cenveo and finish or delete. return true skips further validations !
            if (!string.IsNullOrEmpty(product.PublishFrom) && !string.IsNullOrEmpty(product.PublishTo))
            {
                DateTime from, to;

                if (DateTime.TryParse(product.PublishFrom, out from) && DateTime.TryParse(product.PublishTo, out to))
                {
                    if (to > from)
                    {
                        return true;
                    }
                }

                validationErrors.Add("PublishFrom and PublishTo must be in 'MM/dd/yyyy' format. If both are specified, PublishFrom must be earlier than PublishTo");
                return false;
            }


            if (!string.IsNullOrEmpty(product.MinItemsInOrder) && !string.IsNullOrEmpty(product.MaxItemsInOrder))
            {
                uint min, max;
                if (uint.TryParse(product.MinItemsInOrder, out min) && uint.TryParse(product.MaxItemsInOrder, out max))
                {
                    if (min <= max)
                    {
                        return true;
                    }
                }

                validationErrors.Add("MinItemsInOrder and MaxItemsInOrder must be non-negative integer. If both are specified, MinItemsInOrder must be less than MaxnItemsInOrder");
                return false;
            }*/


            return isValid;
        }

        private void SaveProduct(ProductDto productDto, int siteID)
        {
            var categories = productDto.ProductCategory.Split('\n');
            var productParent = CreateProductCategory(categories, siteID);
            var sku = EnsureSKU(productDto, siteID);
            var newProduct = AppendProduct(productParent, productDto, sku);
        }

        private SKUTreeNode AppendProduct(TreeNode parent, ProductDto product, SKUInfo sku)
        {
            if (parent == null || product == null)
                return null;

            TreeProvider tree = new TreeProvider(MembershipContext.AuthenticatedUser);
            SKUTreeNode existingProduct = (SKUTreeNode)parent.Children.FirstOrDefault(c => c.NodeSKUID == sku.SKUID);
            SKUTreeNode newProduct = existingProduct ?? (SKUTreeNode)TreeNode.New("KDA.Product", tree);

            newProduct.DocumentName = product.ProductName;
            newProduct.DocumentSKUName = product.ProductName;
            newProduct.NodeSKUID = sku.SKUID;
            newProduct.NodeName = product.ProductName;
            newProduct.DocumentCulture = LocalizationContext.PreferredCultureCode;
            newProduct.SetValue("ProductType", product.ProductType);
            newProduct.SetValue("ProductSKUWeight", Convert.ToDecimal(product.PackageWeight));
            newProduct.SetValue("ProductNumberOfItemsInPackage", Convert.ToInt32(product.ItemsInPackage));
            newProduct.SetValue("ProductChiliTemplateID", product.ChiliTemplateID ?? string.Empty);
            newProduct.SetValue("ProductChiliWorkgroupID", product.ChiliWorkgroupID ?? string.Empty);
            newProduct.SetValue("ProductChiliPdfGeneratorSettingsId", product.ChiliPdfGeneratorSettingsID ?? string.Empty);
            newProduct.SetValue("ProductSKUNeedsShipping", (product.NeedsShipping?.ToLower() ?? string.Empty) == "true");
            newProduct.SetValue("ProductChili3dEnabled", (product.Chili3DEnabled?.ToLower() ?? string.Empty) == "true");
            newProduct.SetValue("ProductDynamicPricing", GetDynamicPricingJson(product.DynamicPriceMinItems, product.DynamicPriceMaxItems, product.DynamicPrice));
            newProduct.SetValue("ProductCustomerReferenceNumber", product.CustomerReferenceNumber);
            newProduct.SetValue("ProductMachineType", product.MachineType);
            newProduct.SetValue("ProductColor", product.Color);
            newProduct.SetValue("ProductPaper", product.Paper);
            newProduct.SetValue("ProductProductionTime", product.ProductionTime);
            newProduct.SetValue("ProductShipTime", product.ShipTime);
            newProduct.SetValue("ProductShippingCost", product.ShippingCost);
            newProduct.SetValue("ProductSheetSize", product.SheetSize);
            newProduct.SetValue("ProductTrimSize", product.TrimSize);
            newProduct.SetValue("ProductFinishedSize", product.FinishedSize);
            newProduct.SetValue("ProductBindery", product.Bindery);

            DateTime publishFrom, publishTo;
            if (DateTime.TryParse(product.PublishFrom, out publishFrom))
            {
                newProduct.DocumentPublishFrom = publishFrom;
            }
            if (DateTime.TryParse(product.PublishTo, out publishTo))
            {
                newProduct.DocumentPublishTo = publishTo;
            }

            SetPageTemplate(newProduct, "_Kadena_Product_Detail");

            if (existingProduct == null)
            {
                newProduct.Insert(parent);
            }
            else
            {
                newProduct.Update();
            }

            return newProduct;
        }

        protected void SetPageTemplate(TreeNode node, string templateName)
        {
            var pageTemplateInfo = PageTemplateInfoProvider.GetPageTemplateInfo(templateName);
            node.DocumentPageTemplateID = pageTemplateInfo?.PageTemplateId ?? 0;
            node.NodeTemplateForAllCultures = true;
        }


        private string GetDynamicPricingJson(string min, string max, string price)
        {
            int[] mins, maxes;
            decimal[] prices;

            var message = "Bad format of Dynamic Pricing definitions. DynamicPriceMinItems, DynamicPriceMaxItems and DynamicPrice cells must contain the same count of rows in one product in proper numeric format.";

            if (string.IsNullOrWhiteSpace(min) && string.IsNullOrWhiteSpace(max) && string.IsNullOrWhiteSpace(price))
            {
                return string.Empty;
            }

            try
            {
                mins = min.Split('\n').Select(m => Convert.ToInt32(m)).ToArray();
                maxes = max.Split('\n').Select(m => Convert.ToInt32(m)).ToArray();
                prices = price.Split('\n').Select(m => Convert.ToDecimal(m)).ToArray();
            }
            catch (Exception ex)
            {
                throw new ArgumentOutOfRangeException(message, ex);
            }

            if (mins.Length != maxes.Length || mins.Length != prices.Length)
            {
                throw new ArgumentOutOfRangeException(message);
            }

            var ranges = mins.Select((item, index) => new DynamicPricingRange { MinVal = item, MaxVal = maxes[index], Price = prices[index] }).ToList();

            if (ranges.Any(r => r.MaxVal < r.MinVal))
            {
                throw new ArgumentOutOfRangeException("All Dynamic Pricing definition ranges must have Min <= Max.");
            }

            return JsonConvert.SerializeObject(ranges, camelCaseSerializer);
        }

        private TreeNode CreateProductCategory(string[] path, int siteId)
        {
            var root = DocumentHelper.GetDocuments("KDA.ProductsModule")
                            .Path("/", PathTypeEnum.Children)
                            .WhereEquals("ClassName", "KDA.ProductsModule")
                            .Culture(LocalizationContext.CurrentCulture.CultureCode)
                            .CheckPermissions()
                            .NestingLevel(1)
                            .OnSite(new CMS.DataEngine.SiteInfoIdentifier(siteId))
                            .Published()
                            .FirstObject;

            return AppendProductCategory(root, path);
        }

        private TreeNode AppendProductCategory(TreeNode parentPage, string[] subnodes)
        {
            if (parentPage == null || subnodes == null || subnodes.Length <= 0)
                return parentPage;

            TreeProvider tree = new TreeProvider(MembershipContext.AuthenticatedUser);

            //try to find existing category
            TreeNode category = parentPage.Children.FirstOrDefault(c => c.NodeName == subnodes[0]);

            if (category == null)
            {
                category = TreeNode.New("KDA.ProductCategory", tree);
                category.DocumentName = subnodes[0];
                category.DocumentCulture = "en-us";
                SetPageTemplate(category, "_KDA_ProductCategory");
                category.Insert(parentPage);
            }

            return AppendProductCategory(category, subnodes.Skip(1).ToArray());
        }

        private TrackInventoryTypeEnum ParseTrackInventoryTypeEnum(string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
                if (value == "Yes")
                    return TrackInventoryTypeEnum.ByProduct;
                else if (value == "By variants")
                    return TrackInventoryTypeEnum.ByVariants;
            }
            return TrackInventoryTypeEnum.Disabled;
        }

        private SKUInfo EnsureSKU(ProductDto product, int siteID)
        {
            var skus = SKUInfoProvider.GetSKUs(siteID)
                .WhereEquals("SKUNumber", product.SKU);

            if (skus.Count() > 1)
            {
                throw new Exception($"Multiple SKUs with SKUNumber {product.SKU} exist on site");
            }

            var sku = skus.FirstObject ?? new SKUInfo();            

            sku.SKUName = product.ProductName;
            sku.SKUPrice = Convert.ToDouble(product.Price);
            sku.SKUEnabled = true;
            sku.SKUSiteID = siteID;
            sku.SKUNumber = product.SKU;
            sku.SKUDescription = product.Description;
            sku.SKUTrackInventory = ParseTrackInventoryTypeEnum(product.TrackInventory);

            if (!string.IsNullOrWhiteSpace(product.MinItemsInOrder))
            {
                sku.SetValue("SKUMinItemsInOrder", Convert.ToInt32(product.MinItemsInOrder));
            }

            if (!string.IsNullOrWhiteSpace(product.MaxItemsInOrder))
            {
                sku.SetValue("SKUMaxItemsInOrder", Convert.ToInt32(product.MaxItemsInOrder));
            }

            if (!string.IsNullOrEmpty(product.SellOnlyIfItemsAvailable))
            {
                sku.SetValue("SKUSellOnlyAvailable", product.SellOnlyIfItemsAvailable.ToLower() == "true");
            }

            SKUInfoProvider.SetSKUInfo(sku);
            return sku;
        }
    }
}