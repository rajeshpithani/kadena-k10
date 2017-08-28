﻿using CMS.DocumentEngine;
using CMS.Membership;
using CMS.PortalEngine.Web.UI;
using Kadena.Old_App_Code.Kadena.Chili;
using System;
using System.Linq;

namespace Kadena.CMSWebParts.Kadena.Chili
{
    public partial class TemplatesList : CMSAbstractWebPart
    {
        #region Public properties

        public string ProductEditorUrl
        {
            get
            {
                return GetStringValue("ProductEditorUrl", string.Empty);
            }
        }

        #endregion

        #region Public methods

        public override void OnContentLoaded()
        {
            base.OnContentLoaded();
            SetupControl();
        }

        protected void SetupControl()
        {
            if (!StopProcessing)
            {
                SetupTemplatesList();
            }
        }

        #endregion

        #region Private methods

        private void SetupTemplatesList()
        {
            var templatesData = new TemplateServiceHelper()
                .GetMasterTemplateCopies(MembershipContext.AuthenticatedUser.UserID, DocumentContext.CurrentDocument.GetStringValue("ProductChiliTemplateID", string.Empty));

            if ((templatesData?.Count ?? 0) > 0)
            {
                repTemplates.DataSource =
                    templatesData
                    .Select(d => new
                    {
                        EditorUrl = string.Format("{0}?documentId={1}&templateId={2}&workspaceid={3}{4}&quantity={5}",
                            ProductEditorUrl,
                            DocumentContext.CurrentDocument.DocumentID,
                            d.TemplateId,
                            DocumentContext.CurrentDocument.GetStringValue("ProductChiliWorkgroupID", string.Empty),
                            string.IsNullOrWhiteSpace(d.MailingList?.ContainerId) ? string.Empty : $"&containerId={d.MailingList.ContainerId}",
                            (d.MailingList?.RowCount ?? 0).ToString()),
                        TemplateID = d.TemplateId,
                        DateCreated = DateTime.Parse(d.Created),
                        DateUpdated = DateTime.Parse(d.Updated),
                        Name = d.Name
                    })
                    .OrderByDescending(t => t.DateCreated);
                repTemplates.DataBind();
            }
            else
            {
                this.Visible = false;
            }
        }

        #endregion
    }
}