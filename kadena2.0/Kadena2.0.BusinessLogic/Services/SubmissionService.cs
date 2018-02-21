﻿using System;
using Kadena.BusinessLogic.Contracts;
using Kadena.WebAPI.KenticoProviders.Contracts;
using Kadena.Models.CreditCard;
using Kadena2.MicroserviceClients.Contracts;

namespace Kadena.BusinessLogic.Services
{
    public class SubmissionService : ISubmissionService
    {
        private readonly ISubmissionIdProvider submissionProvider;
        private readonly IUserDataServiceClient userClient;
        private readonly IKenticoUserProvider kenticoUsers;
        private readonly IKenticoSiteProvider kenticoSite;
        private readonly IKenticoLogger kenticoLog;


        public SubmissionService(ISubmissionIdProvider submissionProvider, IUserDataServiceClient userClient, IKenticoUserProvider kenticoUsers, IKenticoSiteProvider kenticoSite, IKenticoLogger kenticoLog)
        {
            if (submissionProvider == null)
            {
                throw new ArgumentNullException(nameof(submissionProvider));
            }
            if (userClient == null)
            {
                throw new ArgumentNullException(nameof(userClient));
            }
            if (kenticoUsers == null)
            {
                throw new ArgumentNullException(nameof(kenticoUsers));
            }
            if (kenticoSite == null)
            {
                throw new ArgumentNullException(nameof(kenticoSite));
            }
            if (kenticoLog == null)
            {
                throw new ArgumentNullException(nameof(kenticoLog));
            }


            this.submissionProvider = submissionProvider;
            this.userClient = userClient;
            this.kenticoUsers = kenticoUsers;
            this.kenticoSite = kenticoSite;
            this.kenticoLog = kenticoLog;
        }

        public Guid GenerateNewSubmissionId()
        {
            return Guid.NewGuid();
        }

        public Submission GenerateNewSubmission(string orderJson = "")
        {
            int siteId = kenticoSite.GetKenticoSite().Id;
            int userId = kenticoUsers.GetCurrentUser().UserId;
            int customerId = kenticoUsers.GetCurrentCustomer().Id;

            var oldSubmissions = submissionProvider.GetSubmissions(siteId, userId, customerId);

            foreach (var oldSubmission in oldSubmissions)
            {
                submissionProvider.DeleteSubmission(oldSubmission.SubmissionId);
            }

            var submission = new Submission()
            {
                SubmissionId = GenerateNewSubmissionId(),
                AlreadyVerified = false,
                Processed = false,
                UserId = userId,
                CustomerId = customerId,
                SiteId = siteId,
                OrderJson = orderJson
            };

            submissionProvider.SaveSubmission(submission);
            kenticoLog.LogInfo("Submission Created", "Info", $"Submission {submission.SubmissionId} was generated");
            return submission;
        }

        public Submission GetSubmission(string submissionId)
        {
            var submissionGuid = Guid.Empty;
            if (!Guid.TryParse(submissionId, out submissionGuid))
            {
                return null;
            }

            return submissionProvider.GetSubmission(submissionGuid);
        }

        public void SetAsProcessed(Submission submission, bool orderSuccess, string redirectUrl, string error = "")
        {
            submission.Processed = true;
            submission.Success = orderSuccess;
            submission.RedirectUrl = redirectUrl;
            submission.Error = error;
            submissionProvider.SaveSubmission(submission);
            kenticoLog.LogInfo("Submission Processed", "Info", $"Submission {submission.SubmissionId} was marked as processed");
        }

        public bool VerifySubmissionId(string submissionId)
        {
            var submission = GetSubmission(submissionId);

            if (submission != null && !submission.AlreadyVerified)
            {
                submission.AlreadyVerified = true;
                submissionProvider.SaveSubmission(submission);
                kenticoLog.LogInfo("Submission Verified", "Info", $"Submission {submission.SubmissionId} was marked as verified");
                return true;
            }

            return false;
        }

        public void DeleteProcessedSubmission(Submission submission)
        {
            if (submission == null || !submission.Processed)
            {
                throw new Exception($"Attempting to DeleteProcessedSubmission with not processed submission {submission?.SubmissionId}");
            }
           
            submissionProvider.DeleteSubmission(submission.SubmissionId);
            kenticoLog.LogInfo("Submission Deleted", "Info", $"Submission {submission.SubmissionId} was deleted");
        }

        public void SetSaveCardJson(string submissionId, string saveCardJson)
        {
            var submission = GetSubmission(submissionId);

            if (submission == null)
            {
                throw new ArgumentOutOfRangeException("submissionId", "Invalid of missing submissionId");
            }

            submission.SaveCardJson = saveCardJson;
            submissionProvider.SaveSubmission(submission);
        }

        public bool CheckOwner(Submission submission)
        {
            int siteId = kenticoSite.GetKenticoSite().Id;
            int userId = kenticoUsers.GetCurrentUser().UserId;
            int customerId = kenticoUsers.GetCurrentCustomer().Id;
            return submission.CheckOwner(siteId, userId, customerId);
        }

        public Guid RenewSubmission(string submissionId)
        {
            var newSubmissionId = GenerateNewSubmissionId();
            submissionProvider.UpdateSubmissionId(Guid.Parse(submissionId), newSubmissionId);

            var submission = submissionProvider.GetSubmission(newSubmissionId);
            submission.SubmissionId = newSubmissionId;
            submission.AlreadyVerified = false;
            submission.Processed = false;
            submission.RedirectUrl = string.Empty;
            submission.Success = false;
            submission.Error = string.Empty;
            submissionProvider.SaveSubmission(submission);
            return submission.SubmissionId;
        }
    }
}