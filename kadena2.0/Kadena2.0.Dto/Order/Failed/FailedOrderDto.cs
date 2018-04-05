﻿using System;

namespace Kadena.Dto.Order.Failed
{
    public class FailedOrderDto
    {
        public string Id { get; set; }
        public string SiteName { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalPrice { get; set; }
        public int SubmissionAttemptsCount { get; set; }
        public string OrderStatus { get; set; }
    }
}
