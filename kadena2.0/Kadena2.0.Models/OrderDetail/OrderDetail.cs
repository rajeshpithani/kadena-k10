﻿namespace Kadena.Models.OrderDetail
{
    public class OrderDetail
    {
        public CommonInfo CommonInfo { get; set; }
        public ShippingInfo ShippingInfo { get; set; }
        public PaymentInfo PaymentInfo { get; set; }
        public PricingInfo PricingInfo { get; set; }
        public OrderedItems OrderedItems { get; set; }

        public void HidePrices()
        {
            if (CommonInfo != null)
            {
                CommonInfo.TotalCost = string.Empty;
            }

            PricingInfo = null;
            OrderedItems.HidePrices();
        }
    }
}