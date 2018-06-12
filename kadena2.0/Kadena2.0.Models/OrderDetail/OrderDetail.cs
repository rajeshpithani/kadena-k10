﻿using Kadena.Models.Common;

namespace Kadena.Models.OrderDetail
{
    public class OrderDetail
    {
        public string DateTimeNAString { get;set;}
        public CommonInfo CommonInfo { get; set; }
        public ShippingInfo ShippingInfo { get; set; }
        public PaymentInfo PaymentInfo { get; set; }
        public PricingInfo PricingInfo { get; set; }
        public OrderInfo General { get; set; }
        public OrderedItems OrderedItems { get; set; }
        public OrderActions Actions { get; set; }
        public DialogButton EditOrders { get; set; }

        public void HidePrices()
        {
            if (CommonInfo != null && CommonInfo.TotalCost!=null)
            {
                CommonInfo.TotalCost.Value = string.Empty;
            }

            PricingInfo = null;
            OrderedItems.HidePrices();
        }
    }
}