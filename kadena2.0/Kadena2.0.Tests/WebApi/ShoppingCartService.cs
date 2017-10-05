﻿using System.Threading.Tasks;
using AutoMapper;
using Kadena.WebAPI;
using Kadena.WebAPI.Contracts;
using Kadena.WebAPI.KenticoProviders.Contracts;
using Kadena.WebAPI.Services;
using Kadena2.MicroserviceClients.Contracts;
using Moq;
using Xunit;
using Kadena.Models;
using Kadena.Models.Checkout;
using System.Collections.Generic;
using System.Linq;
using Kadena.WebAPI.Factories.Checkout;

namespace Kadena.Tests.WebApi
{
    public class ShoppingCartServiceTests
    {
        private List<CartItem> _items = new List<CartItem>();

        private DeliveryAddress CreateDeliveryAddress()
        {
            return new DeliveryAddress()
            {
                City = "Prague"
            };
        }

        private DeliveryCarrier CreateDeliveryCarrier()
        {
            return new DeliveryCarrier()
            {
                Title = "CeskaPosta"
            };
        }

        private PaymentMethod CreatePaymentMethod()
        {
            return new PaymentMethod()
            {
                Title = "Card",
                ClassName = "PurchaseOrder"
            };
        }

        private CartItem CreateCartitem()
        {
            var id = _items.Count + 1;
            var result = new CartItem()
            {
                Id = id,
                CartItemText = $"Item{id}",
                ProductType = ProductTypes.StaticProduct,
                TotalPrice = 10,
                UnitPrice = 2,
                Quantity = 5
            };
            _items.Add(result);
            return result;
        }

        private IEnumerable<CartItem> GetItems()
        {
            return _items;
        }

        private ShoppingCartTotals GetShoppingCartTotals()
        {
            return new ShoppingCartTotals()
            {
                TotalItemsPrice = _items.Sum(i => i.TotalPrice),
                TotalShipping = 19.99m,
                TotalTax = 0.2m * _items.Sum(i => i.TotalPrice)
            };
        }

        // TODO Refactor to use different setups
        private ShoppingCartService CreateShoppingCartService(Mock<IKenticoLogger> kenticoLogger = null)
        {
            MapperBuilder.InitializeAll();
            var mapper = Mapper.Instance;

            var kenticoUser = new Mock<IKenticoUserProvider>();
            kenticoUser.Setup(p => p.GetCustomerAddresses(AddressType.Shipping))
                .Returns(new[] { CreateDeliveryAddress() });

            var kenticoProvider = new Mock<IKenticoProviderService>();            
            kenticoProvider.Setup(p => p.GetShippingCarriers())
                .Returns(new[] { CreateDeliveryCarrier() });
            kenticoProvider.Setup(p => p.GetPaymentMethods())
                .Returns(new[] { CreatePaymentMethod() });
            kenticoProvider.Setup(p => p.GetShoppingCartItems(true))
                .Returns(() => GetItems().ToArray());
            kenticoProvider.Setup(p => p.GetShoppingCartTotals())
                .Returns(() => GetShoppingCartTotals());
            kenticoProvider.Setup(p => p.AddCartItem(It.IsAny<NewCartItem>(), null))
                .Returns(() => CreateCartitem());

            var kenticoResource = new Mock<IKenticoResourceService>();
            var orderSubmitClient = new Mock<IOrderSubmitClient>();
            var taxCalculator = new Mock<ITaxEstimationService>();
            var mailingService = new Mock<IKListService>();
            var checkoutFactory = new Mock<ICheckoutPageFactory>();

            return new ShoppingCartService(mapper,
                kenticoProvider.Object,
                kenticoUser.Object,
                kenticoResource.Object,
                taxCalculator.Object,
                mailingService.Object,
                kenticoLogger?.Object ?? new Mock<IKenticoLogger>().Object,
                checkoutFactory.Object);
        }

        [Fact]
        public void GetCheckoutPageTest() //TODO not finished
        {
            // Arrange
            var sut = CreateShoppingCartService();
            CreateCartitem();
            // Act
            var result = sut.GetCheckoutPage();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(1, result.Products.Items.Count);
            Assert.Equal(10, result.Products.Items[0].TotalPrice);
        }

        [Fact]
        public void ChangeItemQuantityTest() //TODO not finished
        {
            // Arrange
            var sut = CreateShoppingCartService();

            // Act
            var result = sut.ChangeItemQuantity(1, 10);

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public void ItemPreview()
        {
            var service = CreateShoppingCartService();
            var result = service.ItemsPreview();

            Assert.NotNull(result);
            Assert.NotNull(result.Items);
            Assert.Equal(0, result.Items.Count);
        }

        [Fact]
        public async Task AddToCart()
        {
            var service = CreateShoppingCartService();
            var result = await service.AddToCart(new NewCartItem());

            Assert.NotNull(result);
            Assert.NotNull(result.CartPreview.Items);
            Assert.Equal(1, result.CartPreview.Items.Count);
        }
    }
}
