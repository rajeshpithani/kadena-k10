﻿using Kadena.Dto.General;
using Kadena.Dto.TemplatedProduct.MicroserviceResponses;
using Kadena2.MicroserviceClients.Clients.Base;
using Kadena2.MicroserviceClients.Contracts;
using Kadena2.MicroserviceClients.Helpers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Kadena2.MicroserviceClients.Clients
{
    public class TemplatedProductService : ClientBase, ITemplatedProductService
    {
        public async Task<BaseResponseDto<GeneratePdfTaskResponseDto>> RunGeneratePdfTask(string endpoint, string templateId, string settingsId, string siteDomain)
        {
            using (var httpClient = new HttpClient())
            {
                var url = $"{endpoint.TrimEnd('/')}/api/template/{templateId}/pdf/{settingsId}";
                new MicroserviceHelper().AddHeader(httpClient, "suppliantDomain", siteDomain);
                var response = await httpClient.GetAsync(url, HttpCompletionOption.ResponseContentRead).ConfigureAwait(false);
                return await ReadResponseJson<GeneratePdfTaskResponseDto>(response);
            }
        }

        public async Task<BaseResponseDto<GeneratePdfTaskStatusResponseDto>> GetGeneratePdfTaskStatus(string endpoint, string templateId, string taskId, string siteDomain)
        {
            using (var httpClient = new HttpClient())
            {
                var url = $"{endpoint.TrimEnd('/')}/api/template/{templateId}/pdftask/{taskId}";
                new MicroserviceHelper().AddHeader(httpClient, "suppliantDomain", siteDomain);
                var response = await httpClient.GetAsync(url).ConfigureAwait(false);
                return await ReadResponseJson<GeneratePdfTaskStatusResponseDto>(response);
            }
        }

        public async Task<BaseResponseDto<bool?>> SetName(string endpoint, Guid templateId, string name, string siteDomain)
        {
            using (var httpClient = new HttpClient())
            {
                var url = $"{endpoint.TrimEnd('/')}/api/template";
                new MicroserviceHelper().AddHeader(httpClient, "suppliantDomain", siteDomain);
                using (var content = new StringContent(JsonConvert.SerializeObject(new
                {
                    templateId = templateId,
                    name = name
                }), System.Text.Encoding.UTF8, "application/json"))
                {
                    using (var response = await httpClient.PutAsync(url, content))
                    {
                        return await ReadResponseJson<bool?>(response);
                    }
                }
            }
        }

        public async Task<BaseResponseDto<List<TemplateServiceDocumentResponse>>> GetTemplates(string endpoint, int userId, Guid masterTemplateId, string siteDomain)
        {
            using (var httpClient = new HttpClient())
            {
                var url = $"{endpoint.TrimEnd('/')}/api/template/{masterTemplateId}/users/{userId}";
                new MicroserviceHelper().AddHeader(httpClient, "suppliantDomain", siteDomain);
                using (var response = await httpClient.GetAsync(url).ConfigureAwait(false))
                {
                    return await ReadResponseJson<List<TemplateServiceDocumentResponse>>(response);
                }
            }
        }
    }
}
