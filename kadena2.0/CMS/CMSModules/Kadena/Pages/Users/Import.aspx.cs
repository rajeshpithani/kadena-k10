﻿using CMS.UIControls;
using Kadena.Old_App_Code.Kadena.Imports.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Kadena.CMSModules.Kadena.Pages.Users
{
    public partial class Import : CMSPage
    {
        private int SelectedSiteID => Convert.ToInt32(siteSelector.Value);

        protected void btnUploadUserList_Click(object sender, EventArgs e)
        {
            var file = importFile.PostedFile;

            // TODO:
            // new UserImportService().ProcessImportFile()
        }

        protected void btnDownloadTemplate_Click(object sender, EventArgs e)
        {
            var bytes = new UserImportService().GetTemplateFile(SelectedSiteID);
            var templateFileName = "users-upload-template.xlsx";

            WriteFileToResponse(templateFileName, bytes);
        }

        private void WriteFileToResponse(string filename, byte[] data)
        {
            Response.Clear();
            Response.ContentType = "application/octet-stream";
            Response.AddHeader("Content-Disposition", "attachment; filename=" + filename);

            Response.OutputStream.Write(data, 0, data.Length);
            Response.Flush();

            Response.Close();
        }
    }
}