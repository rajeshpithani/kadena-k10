﻿using Kadena.Dto.SubmitOrder.MicroserviceRequests;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Kadena.Dto.Order
{
    [DataContract]
    public class RecentOrderDto
    {
        [DataMember(Name = "id")]
        public string Id { get; set; }

        [DataMember(Name = "createDate")]
        public DateTime CreateDate { get; set; }

        [DataMember(Name = "status")]
        public string Status { get; set; }

        [DataMember(Name = "shippingDate")]
        public DateTime? ShippingDate { get; set; }

        [DataMember(Name = "totalCost")]
        public double TotalPrice { get; set; }

        [DataMember(Name = "clientId")]
        public int CustomerId { get; set; }

        [DataMember(Name = "items")]
        public IEnumerable<OrderItemDto> Items { get; set; }

        [DataMember(Name = "campaign")]
        public CampaignDTO campaign { get; set; }
    }
}