﻿using Kadena.BusinessLogic.Contracts;
using Kadena.Models.Common;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Kadena.BusinessLogic.Services
{
    public class XlsxConvert : IConvert
    {
        public byte[] GetBytes(TableView data)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            var sheet = CreateSheet();
            AddSheetHeaderRow(sheet, data.Headers);
            AddSheetDataRows(sheet, data);
            AdjustColumnsSize(sheet, data);
            return GetWorkbookBytes(sheet.Workbook);
        }

        private static void AdjustColumnsSize(ISheet sheet, TableView table)
        {
            var charWidth = 256;
            var minimalCharCount = 16;
            var minimalColumnWidth = charWidth * minimalCharCount;

            var headersCount = table.Headers?.Length ?? 0;
            var dataMaxCellCount = 0;
            if (table.Rows != null)
            {
                dataMaxCellCount = table.Rows
                    .Select(r => r?.Items?.Length ?? 0)
                    .Concat(new[] { 0 })
                    .Max();
            }

            var columnCount = Math.Max(headersCount, dataMaxCellCount);

            for (int i = 0; i < columnCount; i++)
            {
                sheet.AutoSizeColumn(i);
                if (sheet.GetColumnWidth(i) < minimalColumnWidth)
                {
                    sheet.SetColumnWidth(i, minimalColumnWidth);
                }
            }
        }

        private static byte[] GetWorkbookBytes(IWorkbook workbook)
        {
            using (var ms = new MemoryStream())
            {
                workbook.Write(ms);
                var bytes = ms.ToArray();
                return bytes;
            }
        }

        private static void AddSheetDataRows(ISheet sheet, TableView table)
        {
            var firstDataRowNumber = sheet.LastRowNum + 1;
            for (int rowIndex = 0; rowIndex < table.Rows.Length; rowIndex++)
            {
                var row = sheet.CreateRow(firstDataRowNumber + rowIndex);
                var rowCellCount = table.Rows[rowIndex].Items.Length;
                var rowData = table.Rows[rowIndex].Items;
                for (int cellIndex = 0; cellIndex < rowCellCount; cellIndex++)
                {
                    var cell = row.CreateCell(cellIndex);
                    if (rowData[cellIndex] != null)
                    {
                        // if needed it could be casted to excel supported primitive types
                        if (rowData[cellIndex] is IEnumerable<object> enumerable)
                        {
                            cell.SetCellValue(string.Join(", ", enumerable));
                        }
                        else
                        {
                            cell.SetCellValue(rowData[cellIndex].ToString());
                        }
                    }
                }
            }
        }

        private static void AddSheetHeaderRow(ISheet sheet, string[] headers)
        {
            if (headers == null || headers.Length == 0)
            {
                return;
            }

            var headerRow = sheet.CreateRow(0);
            var headerStyle = CreateHeaderStyle(sheet.Workbook);

            for (int i = 0; i < headers.Length; i++)
            {
                var cell = headerRow.CreateCell(i);
                cell.CellStyle = headerStyle;
                cell.SetCellValue(headers[i]);
            }
        }

        private static ICellStyle CreateHeaderStyle(IWorkbook workbook)
        {
            var font = workbook.CreateFont();
            font.IsBold = true;
            var style = workbook.CreateCellStyle();
            style.SetFont(font);
            return style;
        }

        private static ISheet CreateSheet()
        {
            IWorkbook workbook = new XSSFWorkbook();
            var sheet = workbook.CreateSheet();
            return sheet;
        }
    }
}
