﻿using AutoMapper;
using Kadena.BusinessLogic.Contracts;
using Kadena.Dto.RecentOrders;
using Kadena.Dto.ViewOrder.Responses;
using Kadena.WebAPI.Infrastructure;
using System;
using System.Threading.Tasks;
using System.Web.Http;

namespace Kadena.WebAPI.Controllers
{
    public class RecentOrdersController : ApiControllerBase
    {
        private readonly IOrderDetailService orderDetailService;
        private readonly IMapper _mapper;
        private readonly IOrderListService _orderService;

        public RecentOrdersController(
            IOrderDetailService orderDetailService, 
            IOrderListServiceFactory orderListServiceFactory, 
            IMapper mapper)
        {
            if (orderListServiceFactory == null)
            {
                throw new ArgumentNullException(nameof(orderListServiceFactory));
            }
            if (mapper == null)
            {
                throw new ArgumentNullException(nameof(mapper));
            }

            _orderService = orderListServiceFactory.GetRecentOrders();
            this.orderDetailService = orderDetailService;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/recentorders/getheaders")]
        public async Task<IHttpActionResult> GetHeaders()
        {
            var orderHead = await _orderService.GetHeaders();
            var result = _mapper.Map<OrderHeadDto>(orderHead);
            return ResponseJson(result);
        }

        [HttpGet]
        [Route("api/recentorders/getbody/{pageNumber}")]
        public async Task<IHttpActionResult> GetBody(int pageNumber)
        {
            var orderBody = await _orderService.GetBody(pageNumber);
            var result = _mapper.Map<OrderBodyDto>(orderBody);
            return ResponseJson(result);
        }

        [HttpGet]
        [Route("api/recentorders/getheaders/{orderType}")]
        public async Task<IHttpActionResult> GetHeaders(string orderType)
        {
            var orderHead = await _orderService.GetHeaders(orderType, 0);
            var result = _mapper.Map<OrderHeadBlockDto>(orderHead);
            return ResponseJson(result);
        }

        [HttpGet]
        [Route("api/recentorders/getheaders/{orderType}/{campaignID}")]
        public async Task<IHttpActionResult> GetHeaders(string orderType, int campaignID)
        {
            var orderHead = await _orderService.GetHeaders(orderType, campaignID);
            var result = _mapper.Map<OrderHeadBlockDto>(orderHead);
            return ResponseJson(result);
        }

        [HttpGet]
        [Route(Routes.Order.Detail)]
        public async Task<IHttpActionResult> Get([FromUri]string orderId)
        {
            var detailPage = await orderDetailService.GetOrderDetail(orderId);
            var detailPageDto = _mapper.Map<OrderDetailDTO>(detailPage);
            return ResponseJson(detailPageDto);
        }
    }
}