﻿using System;
using Kadena2.WebAPI.KenticoProviders.Contracts;
using CMS.CustomTables;
using System.Linq;

namespace Kadena2.WebAPI.KenticoProviders.Providers
{
    class SubmissionIdProvider : ISubmissionIdProvider
    {
        private readonly string SubmissionsTable = "KDA.Neco";

        public void StoreSubmissionId(Guid submissionId)
        {
            var newSubmission = CustomTableItem.New(SubmissionsTable);
            newSubmission.SetValue("SubmissionId", submissionId);
            newSubmission.Insert();
        }

        public bool VerifySubmissionId(Guid submissionId)
        {
            var submission = CustomTableItemProvider.GetItems(SubmissionsTable)
                .WhereEquals("SubmissionId", submissionId)
                .FirstOrDefault();

            return submission != null;
        }

        public void DeleteSubmissionId(Guid submissionId)
        {
            var submission = CustomTableItemProvider.GetItems(SubmissionsTable)
                .WhereEquals("SubmissionId", submissionId)
                .FirstOrDefault();

            if (submission != null)
            {
                CustomTableItemProvider.DeleteItem(submission);
            }
        }
    }
}
