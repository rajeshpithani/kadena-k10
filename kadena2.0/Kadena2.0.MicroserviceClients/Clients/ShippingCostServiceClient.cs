﻿using Kadena.Dto.EstimateDeliveryPrice.MicroserviceRequests;
using Kadena.Dto.EstimateDeliveryPrice.MicroserviceResponses;
using Kadena.Dto.General;
using Kadena.KOrder.PaymentService.Infrastucture.Helpers;
using Kadena2.MicroserviceClients.Clients.Base;
using Kadena2.MicroserviceClients.Contracts;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Kadena2.MicroserviceClients.Clients
{
    public class ShippingCostServiceClient : ClientBase, IShippingCostServiceClient
    {
        //public ShippingCostServiceClient() : base()
        //{

        //}

        //public ShippingCostServiceClient(IAwsV4Signer signer) : base(signer)
        //{

        //}

        public string GetRequestString(EstimateDeliveryPriceRequestDto request)
        {
            return JsonConvert.SerializeObject(request, camelCaseSerializer);
        }

        public async Task<BaseResponseDto<EstimateDeliveryPricePayloadDto>> EstimateShippingCost(string serviceEndpoint, string requestBody)
        {
            using (var httpClient = new HttpClient())
            {
                using (var content = new StringContent(requestBody, Encoding.UTF8, "application/json"))
                {
                    using (var response = await httpClient.PostAsync(serviceEndpoint, content).ConfigureAwait(false))
                    {
                        return await ReadResponseJson<EstimateDeliveryPricePayloadDto>(response).ConfigureAwait(false);
                    }
                }
            }
        }
    }
}
