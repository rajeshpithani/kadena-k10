﻿using Kadena.BusinessLogic.Services.Orders;
using Kadena.Infrastructure.Exceptions;
using Kadena.Models.Product;
using System;
using Xunit;

namespace Kadena.Tests.BusinessLogic
{
    public class OrderItemCheckerServiceTests : KadenaUnitTest<OrderItemCheckerService>
    {

        [Theory]
        [InlineData(1,10,1)]
        [InlineData(1, 10, 10)]
        [InlineData(1, 10, 2)]
        [InlineData(0, 10, 2)]
        [InlineData(1, 0, 2)]
        [InlineData(0, 0, 2)]
        void CheckMinMaxQuantityTest_OK(int min, int max, int quantity)
        {
            var sku = new Sku
            {
                MinItemsInOrder = min,
                MaxItemsInOrder = max
            };

            Sut.CheckMinMaxQuantity(sku, quantity);
        }

        [Fact]
        void CheckMinMaxQuantityTest_Few()
        {
            var sku = new Sku
            {
                MinItemsInOrder = 2,
                MaxItemsInOrder = 10
            };

            Assert.Throws<NotLoggedException>(() => Sut.CheckMinMaxQuantity(sku, 1));
        }

        [Fact]
        void CheckMinMaxQuantityTest_Over()
        {
            var sku = new Sku
            {
                MinItemsInOrder = 2,
                MaxItemsInOrder = 10
            };

            Assert.Throws<NotLoggedException>(() => Sut.CheckMinMaxQuantity(sku, 15));
        }

        [Fact]
        void CheckMinMaxQuantity_ShouldPass_WhenLineItemIsRemoved()
        {
            var sku = new Sku
            {
                MinItemsInOrder = 2,
                MaxItemsInOrder = 10
            };

            Sut.CheckMinMaxQuantity(sku, 0);
        }

        [Fact]
        void EnsureInventoryAmountTest_IfAvailable_OK()
        {
            var sku = new Sku
            {
                AvailableItems = 200,
                SellOnlyIfAvailable = true
            };

            Sut.EnsureInventoryAmount(sku, 1,10);
        }

        [Fact]
        void EnsureInventoryAmountTest_IfAvailable_TooMany()
        {
            var sku = new Sku
            {
                AvailableItems = 20,
                SellOnlyIfAvailable = true
            };

            Assert.Throws<ArgumentException>(() => Sut.EnsureInventoryAmount(sku, 100, 100));
        }

        [Fact]
        void EnsureInventoryAmountTest_OK()
        {
            var sku = new Sku
            {
                AvailableItems = 0,
                SellOnlyIfAvailable = false
            };

            Sut.EnsureInventoryAmount(sku, 100, 100);
        }
    }
}
