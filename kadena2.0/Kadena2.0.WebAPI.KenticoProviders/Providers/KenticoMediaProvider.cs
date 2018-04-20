﻿using Kadena.WebAPI.KenticoProviders.Contracts;
using CMS.MediaLibrary;
using CMS.SiteProvider;
using CMS.IO;

namespace Kadena.WebAPI.KenticoProviders.Providers
{
    public class KenticoMediaProvider : IKenticoMediaProvider
    {
        public string GetMediaLibrariesLocation()
        {
            return Path.EnsureSlashes(MediaLibraryHelper.GetMediaRootFolderPath(SiteContext.CurrentSiteName, @"\"));
        }

        public string GetMediaLibraryPath(string mediaLibraryFolder)
        {
            return MediaLibraryInfoProvider.GetMediaLibraryFolderPath(SiteContext.CurrentSiteName, mediaLibraryFolder, @"\");
        }

        public string GetThumbnailPath(string mediaLibraryFolder, string mediaFilePath, int maxSideSize)
        {
            var mediaFile = MediaFileInfoProvider.GetMediaFileInfo(SiteContext.CurrentSiteName, mediaFilePath, mediaLibraryFolder);
            return MediaFileInfoProvider.EnsureThumbnailFile(mediaFile, SiteContext.CurrentSiteName, maxSideSize: maxSideSize);
        }
    }
}