﻿namespace Kadena.Models.Common
{
    public class Pagination
    {
        /// <summary>
        /// Total number of items
        /// </summary>
        public int RowsCount { get; set; }

        /// <summary>
        /// Maximum number of items on page
        /// </summary>
        public int RowsOnPage { get; set; }

        /// <summary>
        /// Number of pages
        /// </summary>
        public int PagesCount { get; set; }

        /// <summary>
        /// Current page number, starting from 1
        /// </summary>
        public int CurrentPage { get; set; }
    }
}