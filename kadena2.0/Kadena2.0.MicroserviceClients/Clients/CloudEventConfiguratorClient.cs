﻿using Kadena2.MicroserviceClients.Contracts;
using System.Threading.Tasks;
using Kadena.Dto.General;
using System.Net.Http;
using Kadena2.MicroserviceClients.Clients.Base;
using Kadena.KOrder.PaymentService.Infrastucture.Helpers;

namespace Kadena2.MicroserviceClients.Clients
{
    public class CloudEventConfiguratorClient : ClientBase, ICloudEventConfiguratorClient
    {
        enum TargetType
        {
            Stream = 4,
            GateWayApi = 5,
            Lambda = 6,
            Noosh = 12
        }

        //public CloudEventConfiguratorClient() : base()
        //{

        //}

        //public CloudEventConfiguratorClient(IAwsV4Signer signer) : base(signer)
        //{
            
        //}

        public async Task<BaseResponseDto<string>> UpdateNooshRule(string endPoint, string ruleName, bool enabled, int rate, string targetId, string workGroupName, string nooshUrl, string nooshToken)
        {
            var url = $"{endPoint}/cloudwatch";
            var body = new
            {
                RuleName = ruleName,
                Rate = rate,
                Enabled = enabled,
                TargetId = targetId,
                TargetType = TargetType.Noosh,
                InputParameters = new
                {
                    WorkGroups = new string[] { workGroupName },
                    NooshUrl = nooshUrl,
                    NooshToken = nooshToken
                }
            };

            return await Send<string>(HttpMethod.Put, url, body);
        }
    }
}
