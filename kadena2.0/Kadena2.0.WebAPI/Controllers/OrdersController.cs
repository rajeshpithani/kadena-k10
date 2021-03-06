﻿using AutoMapper;
using Kadena.Dto.RecentOrders;
using Kadena.Dto.SubmitOrder.Requests;
using Kadena.Dto.SubmitOrder.Responses;
using Kadena.Dto.ViewOrder.Responses;
using Kadena.Models.SubmitOrder;
using Kadena.BusinessLogic.Contracts;
using Kadena.WebAPI.Infrastructure;
using Kadena.WebAPI.Infrastructure.Filters;
using System.Threading.Tasks;
using System.Web.Http;
using System;

namespace Kadena.WebAPI.Controllers
{
    public class OrdersController : ApiControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IOrderListService _orderService;
        private readonly ISubmitOrderService _orderSubmitService;
        private readonly IOrderDetailService _orderDetailService;

        public OrdersController(IOrderListServiceFactory orderListServiceFactory, ISubmitOrderService orderSubmitService, IOrderDetailService orderDetailService, IMapper mapper)
        {
            if (orderListServiceFactory == null)
            {
                throw new ArgumentNullException(nameof(orderListServiceFactory));
            }
            if (orderSubmitService == null)
            {
                throw new ArgumentNullException(nameof(orderSubmitService));
            }
            if (orderDetailService == null)
            {
                throw new ArgumentNullException(nameof(orderDetailService));
            }
            if (mapper == null)
            {
                throw new ArgumentNullException(nameof(mapper));
            }

            _orderService = orderListServiceFactory.GetRecentOrders();
            _orderSubmitService = orderSubmitService;
            _orderDetailService = orderDetailService;
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
        [Route("api/orderdetail/{orderId}")]
        [CustomerAuthorizationFilter]
        public async Task<IHttpActionResult> Get([FromUri]string orderId)
        {
            var detailPage = await _orderDetailService.GetOrderDetail(orderId);
            var detailPageDto = _mapper.Map<OrderDetailDTO>(detailPage);
            return ResponseJson(detailPageDto); // TODO refactor using checking null
        }


        [HttpPost]
        [Route("api/shoppingcart/submit")]
        [CustomerAuthorizationFilter]
        public async Task<IHttpActionResult> Submit([FromBody]SubmitRequestDto request)
        {
            var submitRequest = _mapper.Map<SubmitOrderRequest>(request);
            var serviceResponse = await _orderSubmitService.SubmitOrder(submitRequest);
            var resultDto = _mapper.Map<SubmitOrderResponseDto>(serviceResponse);
            return ResponseJson(resultDto);
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
    }
}