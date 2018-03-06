﻿using Kadena.BusinessLogic.Contracts;
using System.IdentityModel.Tokens;
using System.IO;
using System.Xml;
using System;
using Kadena.WebAPI.KenticoProviders.Contracts;

namespace Kadena.BusinessLogic.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly IKenticoLogger logger;

        public IdentityService(IKenticoLogger logger)
        {
            if (logger == null)
            {
                throw new ArgumentNullException(nameof(logger));
            }
            this.logger = logger;
        }


        public Uri TryAuthenticate(string samlString)
        {
            logger.LogInfo(this.GetType().Name, "SAMLAUTHENTICATE", samlString);
            Saml2SecurityToken token = null;
            try
            {
                token = GetToken(samlString);
            }
            catch(Exception e)
            {
                logger.LogException(this.GetType().Name, e);
                return new Uri("https://en.wikipedia.org/wiki/HTTP_403", UriKind.Absolute);
            }
            // create/update user
            // update roles
            // authenticate in Kentico
            return new Uri("/", UriKind.Relative);
        }

        private Saml2SecurityToken GetToken(string tokenString)
        {
            var handler = new Saml2SecurityTokenHandler();

            using (var xmlReader = new XmlTextReader(new StringReader(tokenString)))
            {
                if (!xmlReader.ReadToFollowing("saml:Assertion"))
                {
                    throw new ArgumentException("Assertion not found!", nameof(tokenString));
                }
                return handler.ReadToken(xmlReader) as Saml2SecurityToken;
            }
        }
    }
}
