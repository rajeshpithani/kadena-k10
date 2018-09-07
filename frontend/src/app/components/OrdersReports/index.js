import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
/* components */
import Alert from 'app.dump/Alert';
import Pagination from 'app.dump/Pagination';
import Spinner from 'app.dump/Spinner';
import SortIcon from 'app.dump/SortIcon';
import Button from 'app.dump/Button';
/* ac */
import { getRows, changeDate, manage } from 'app.ac/ordersReports';
/* globals */
import { ORDERS_REPORTS } from 'app.globals';
/* helpers */
import { sortObjs } from 'app.helpers/array';
import { createSearchStr } from 'app.helpers/location';
/* local components */
import Order from './Order';
import DateFilter from './DateFilter';
import ManageOrdersModal from './ManageOrdersModal';

class OrdersReports extends Component {
  static propTypes = {
    headings: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sort: PropTypes.bool,
      isDate: PropTypes.bool
    }).isRequired).isRequired,
    pageInfo: PropTypes.shape({
      export: PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      }).isRequired,
      filter: PropTypes.shape({
        orderDate: PropTypes.shape({
          show: PropTypes.bool.isRequired
        }).isRequired
      }).isRequired,
      getRowsUrl: PropTypes.string.isRequired,
      noOrdersMessage: PropTypes.string.isRequired,
      manageOrders: PropTypes.shape({
        togglerText: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    getRows: PropTypes.func.isRequired,
    changeDate: PropTypes.func.isRequired,
    manage: PropTypes.func.isRequired,
    store: PropTypes.shape({
      rowsAreAsked: PropTypes.bool.isRequired,
      rows: PropTypes.arrayOf(PropTypes.object).isRequired,
      pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pagesCount: PropTypes.number,
        rowsCount: PropTypes.number,
        rowsOnPage: PropTypes.number
      }).isRequired,
      sort: PropTypes.shape({
        sortOrderAsc: PropTypes.bool.isRequired,
        sortBy: PropTypes.string
      }).isRequired,
      filter: PropTypes.shape({
        orderDate: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  }

  static getSortId(sortOrderAsc, sortBy) {
    if (typeof sortBy === 'undefined') return '';

    const sortOrder = sortOrderAsc ? 'ASC' : 'DESC';
    const sortId = `${sortBy}-${sortOrder}`;

    return sortId;
  }

  state = {
    openManageOrdersPopup: false // TODO: false
  };

  generateUrl = (defaultUrl, args = {}) => {
    const {
      pagination,
      filter
    } = this.props.store;

    const data = {
      page: pagination.currentPage,
      sort: this.sort,
      dateFrom: OrdersReports.getFormattedDate(filter.orderDate.dateFrom),
      dateTo: OrdersReports.getFormattedDate(filter.orderDate.dateTo),
      ...args
    };

    const search = {};

    if (typeof data.page !== 'undefined' && !data.export) search.page = data.page + 1;  // BE requires to start the pages from 1
    if (data.sort && !data.export) search.sort = data.sort;
    if (data.dateFrom) search.dateFrom = data.dateFrom;
    if (data.dateTo) search.dateTo = data.dateTo;

    const searchUrl = Object.keys(search).length ? createSearchStr(search) : '';

    const url = `${defaultUrl}${searchUrl}`;

    return url;
  }

  static getFormattedDate(date) {
    return date !== null ? moment(date).format('YYYY-MM-DD') : '';
  }

  componentDidMount() {
    this.props.getRows(this.generateUrl(this.props.pageInfo.getRowsUrl));
  }

  handleChangePage = (page) => {
    if (page === this.props.store.pagination.currentPage) return;
    const url = this.generateUrl(this.props.pageInfo.getRowsUrl, { page });
    this.props.getRows(url, { page });
  };

  getHeadings = () => {
    const headings = this.props.headings.map((heading, index) => {
      const onClick = heading.sort ? () => this.sortColumn(heading.id) : null;

      const sortIcon = heading.sort
        ? (
          <SortIcon
            block={false}
            sortOrderAsc={this.props.store.sort.sortOrderAsc}
            isActive={heading.id === this.props.store.sort.sortBy}
          />
        ) : null;

      return (
        <th
          key={heading.id}
          onClick={onClick}
          style={{ cursor: heading.sort ? 'pointer' : 'initial' }}
        >
          {sortIcon}
          <span className="ml-2">{heading.label}</span>
        </th>
      );
    });
    return <tr>{headings}</tr>;
  };

  getRows = () => {
    const { rows } = this.props.store;
    const grouppedRows = [];
    const checkedRows = [];

    rows.forEach((row, rowIndex) => {
      const { orderNumber } = row.items;
      const grouppedRow = JSON.parse(JSON.stringify(row));

      if (!checkedRows.includes(rowIndex)) {
        for (let i = rowIndex + 1; i < rows.length; i += 1) {
          if (rows[i].items.orderNumber.value === orderNumber.value) {
            Object.keys(rows[i].items).forEach((key) => {
              if (grouppedRow.items[key].value.toString() !== rows[i].items[key].value.toString()) {
                if (Array.isArray(grouppedRow.items[key].value)) {
                  grouppedRow.items[key].value.push(rows[i].items[key].value);
                } else {
                  grouppedRow.items[key].value = [grouppedRow.items[key].value, rows[i].items[key].value];
                }
              }
            });
            checkedRows.push(i);
          }
        }

        grouppedRows.push(grouppedRow);
      }
    });

    const rowElements = grouppedRows.map((row, index) => <Order headings={this.props.headings} key={index} {...row}/>);
    return rowElements;
  };

  sortColumn = (sortBy) => {
    const newSortOrderAsc = !this.props.store.sort.sortOrderAsc;
    this.sort = OrdersReports.getSortId(newSortOrderAsc, sortBy);

    const { dateFrom, dateTo } = this.props.store.filter.orderDate;

    const args = {
      page: 0, // reset pages
      sort: this.sort,
      sortOrderAsc: newSortOrderAsc,
      sortBy,
      dateFrom: OrdersReports.getFormattedDate(dateFrom),
      dateTo: OrdersReports.getFormattedDate(dateTo)
    };

    const url = this.generateUrl(this.props.pageInfo.getRowsUrl, args);

    this.props.getRows(url, args);
  };

  getContent = () => {
    let content = <Spinner />;

    if (!this.props.store.rows.length && this.props.store.rowsAreAsked) {
      content = <Alert type="info" text={this.props.pageInfo.noOrdersMessage} />;
    }

    if (this.props.store.rows.length) {
      const { pagination } = this.props.store;

      content = (
        <div>
          <div className="overflow--y-scroll">
            <table className="show-table show-table--pointer">
              <tbody>
                {this.getHeadings()}
                {this.getRows()}
              </tbody>
            </table>
          </div>

          <Pagination
            pagesNumber={pagination.pagesCount}
            initialPage={pagination.currentPage}
            currPage={pagination.currentPage}
            itemsOnPage={pagination.rowsOnPage}
            itemsNumber={pagination.rowsCount}
            onPageChange={({ selected }) => { this.handleChangePage(selected); }}
          />
        </div>
      );
    }

    return content;
  };

  applyDate = (dateTo, dateFrom) => {
    this.sort = OrdersReports.getSortId(this.props.store.sort.sortOrderAsc, this.props.store.sort.sortBy);

    const args = {
      page: 0, // reset pages
      sort: this.sort,
      dateFrom: OrdersReports.getFormattedDate(dateFrom),
      dateTo: OrdersReports.getFormattedDate(dateTo)
    };

    const url = this.generateUrl(this.props.pageInfo.getRowsUrl, args);

    this.props.changeDate(dateFrom, 'dateFrom');
    this.props.changeDate(dateTo, 'dateTo');
    this.props.getRows(url, args);
  };

  getDateFilter = () => {
    const { orderDate } = this.props.pageInfo.filter;

    if (!orderDate.show) return null;
    return (
      <DateFilter
        ui={orderDate}
        dateFrom={this.props.store.filter.orderDate.dateFrom}
        dateTo={this.props.store.filter.orderDate.dateTo}
        applyDate={this.applyDate}
      />
    );
  };

  getExportLink = () => {
    const args = {
      export: true,
      dateFrom: OrdersReports.getFormattedDate(this.props.store.filter.orderDate.dateFrom),
      dateTo: OrdersReports.getFormattedDate(this.props.store.filter.orderDate.dateTo)
    };

    const url = this.generateUrl(this.props.pageInfo.export.url, args);
    const link = <a className="btn-action" href={url}>{this.props.pageInfo.export.label}</a>;
    return link;
  };

  openManageOrdersPopup = () => this.setState({ openManageOrdersPopup: true });

  closeManageOrdersPopup = () => this.setState({ openManageOrdersPopup: false });

  getManageOrdersButton = () => {
    if (!this.props.store.rows.length && this.props.store.rowsAreAsked) {
      return null;
    }

    return (
      <Button
        text={this.props.pageInfo.manageOrders.togglerText}
        type="action"
        btnClass="mr-2"
        onClick={this.openManageOrdersPopup}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="flex--end--between mb-3">
          {this.getDateFilter()}
          <div>
            {this.getManageOrdersButton()}
            {this.getExportLink()}
          </div>
        </div>
        <ManageOrdersModal
          open={this.state.openManageOrdersPopup}
          closeModal={this.closeManageOrdersPopup}
          ui={this.props.pageInfo.manageOrders}
          rows={this.props.store.rows}
          manage={this.props.manage}
        />
        {this.getContent()}
      </div>
    );
  }
}

OrdersReports.defaultProps = { ...ORDERS_REPORTS };

export default connect((state) => {
  const { ordersReports } = state;
  return { store: { ...ordersReports } };
}, {
  getRows,
  changeDate,
  manage
})(OrdersReports);
