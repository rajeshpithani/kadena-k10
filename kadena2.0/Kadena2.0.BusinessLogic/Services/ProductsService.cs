﻿using Kadena.BusinessLogic.Contracts;
using Kadena.Models.Product;
using Kadena.WebAPI.KenticoProviders.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Kadena.BusinessLogic.Services
{
    public class ProductsService : IProductsService
    {
        private readonly IKenticoProductsProvider products;
        private readonly IKenticoFavoritesProvider favorites;
        private readonly IKenticoResourceService resources;

        public ProductsService(IKenticoProductsProvider products, IKenticoFavoritesProvider favorites, IKenticoResourceService resources)
        {
            if (products == null)
            {
                throw new ArgumentNullException(nameof(products));
            }
            if (favorites == null)
            {
                throw new ArgumentNullException(nameof(favorites));
            }
            if (resources == null)
            {
                throw new ArgumentNullException(nameof(resources));
            }

            this.products = products;
            this.favorites = favorites;
            this.resources = resources;
        }

        public Price GetPrice(int skuId, Dictionary<string, int> skuOptions = null)
        {
            if ((skuOptions?.Count ?? 0) == 0)
            {
                return products.GetSkuPrice(skuId);
            }

            var productVariants = products.GetVariants(skuId);
            var optionsVariants = products.GetVariants(new HashSet<int>(skuOptions.Select(v => v.Value).Distinct()));
            var selectedVariant = productVariants.SingleOrDefault(pv => optionsVariants.Contains(pv.SkuId));

            return products.GetSkuPrice(selectedVariant.SkuId);
        }

        public ProductsPage GetProducts(string path)
        {
            var categories = this.products.GetCategories(path);
            var products = this.products.GetProducts(path);
            var favoriteIds = favorites.CheckFavoriteProductIds(products.Select(p => p.Id).ToList());
            var pathCategory = this.products.GetCategory(path);
            var bordersEnabledOnSite = resources.GetSettingsKey("KDA_ProductThumbnailBorderEnabled").ToLower() == "true";
            var borderEnabledOnParentCategory = pathCategory?.ProductBordersEnabled ?? true; // true to handle product in the root, without parent category
            var borderStyle = resources.GetSettingsKey("KDA_ProductThumbnailBorderStyle");

            var productsPage = new ProductsPage
            {
                Categories = categories,
                Products = products
            };

            productsPage.MarkFavoriteProducts(favoriteIds);
            productsPage.Products.ForEach(p => p.SetBorderInfo(bordersEnabledOnSite, borderEnabledOnParentCategory, borderStyle));

            return productsPage;
        }
    }
}
