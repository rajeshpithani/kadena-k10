﻿using AutoMapper;
using Kadena.BusinessLogic.Contracts;
using Kadena.Dto.CustomerData;
using Kadena.WebAPI.Infrastructure;
using System;
using System.Net;
using System.Web.Http;

namespace Kadena.WebAPI.Controllers
{
    public class UserBudgetController : ApiControllerBase
    {
        private readonly IUserBudgetService userBudgetService;
        private readonly IMapper mapper;

        public UserBudgetController(IUserBudgetService userBudgetService, IMapper mapper)
        {
            if (userBudgetService == null)
            {
                throw new ArgumentNullException(nameof(userBudgetService));
            }

            if (mapper == null)
            {
                throw new ArgumentNullException(nameof(mapper));
            }

            this.mapper = mapper;
            this.userBudgetService = userBudgetService;

        }
        [HttpPost]
        [Route("api/userbudget/updateUserBudget")]
        public IHttpActionResult updateUserBudget([FromBody]UserBudgetDto request)
        {
            var submitRequest = mapper.Map<UserBudgetDto>(request);
            var serviceResponse = userBudgetService.UpdateUserBudgetAllocation(submitRequest.ItemID, submitRequest.UserBudget);
            return Ok(serviceResponse ? HttpStatusCode.OK : HttpStatusCode.InternalServerError);
        }
    }
}