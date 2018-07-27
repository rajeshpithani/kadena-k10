// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
/* components */
import Spinner from 'app.dump/Spinner';
/* utilities */
import { getSearchObj } from 'app.helpers/location';
/* globals */
import { ORDER_DETAIL as ORDER_DETAIL_URL } from 'app.globals';
/* constants */
import { FAILURE } from 'app.consts';
/* local components */
import CommonInfo from './CommonInfo';
import ShippingInfo from './ShippingInfo';
import PaymentInfo from './PaymentInfo';
import PricingInfo from './PricingInfo';
import OrderedItems from './OrderedItems';
import Actions from './Actions';
import EditModal from './EditModal';
import OrderHistory from './OrderHistory';
import EmailProof from '../EmailProof';
import GroupContainer from './GroupContainer';

type UI = {
  dateTimeNAString: string,
  commonInfo: {
    status: {
      value: string,
      note: string
    },
    totalCost: {
      value: string
    }
  },
  orderedItems: {
    items: Array<{ id: string, quantity: number, lineNumber: number }>
  },
  paymentInfo: {
    paymentIcon: string
  },
  pricingInfo: ?{
    items: []
  },
  shippingInfo: {},
  actions: {},
  general: {},
  editOrders: {
    proceedUrl: string,
    dialog: {}
  },
  emailProof: {
    show: boolean,
    url: string
  }
}

type State = {
  showEditModal: boolean,
  ui: ?UI,
  emailProof: {
    show: boolean,
    url: string
  }
}

class OrderDetail extends Component<void, void, State> {
  maxOrderQuantity: any;

  state = {
    showEditModal: false, // managed in Actions component
    ui: null,
    emailProof: {
      show: false,
      url: ''
    },
    orderHistory: null,
    showOrderHistory: false
  }

  componentDidMount() {
    const orderID: string = getSearchObj().orderID || '';
    const url: string = `${ORDER_DETAIL_URL.orderDetailUrl}/${orderID}`;

    axios
      .get(url)
      .then((response: {
        data: {
          payload: UI,
          success: boolean,
          errorMessage: string
        }
      }): void => {
        const { payload, success, errorMessage } = response.data;
        if (!success) {
          window.store.dispatch({ type: FAILURE, alert: errorMessage });
        } else {
          this.setState({ ui: payload });
        }
      })
      .catch((error): void => {
        window.store.dispatch({ type: FAILURE, error });
      });
  }

  changeApprovalMessage = (text: string) => {
    if (!this.state.orderHistory) return; // by default orderHistory is null and has lazyLoading
    this.setState({
      orderHistory: {
        ...this.state.orderHistory,
        message: {
          ...this.state.orderHistory.message,
          text
        }
      }
    });
  };

  getMaxOrderQuantity = () => {
    if (this.maxOrderQuantity || !this.state.ui) return this.maxOrderQuantity;

    const maxOrderQuantity = {};
    this.state.ui.orderedItems.items.forEach((orderedItem: { id: string, quantity: number }) => {
      maxOrderQuantity[orderedItem.id] = orderedItem.quantity;
    });

    this.maxOrderQuantity = maxOrderQuantity;

    return maxOrderQuantity;
  };

  changeStatus = (newStatus: string, note: string): void => {
    const { ui } = this.state;
    if (!ui) return;
    this.setState({
      ui: {
        ...ui,
        commonInfo: {
          ...ui.commonInfo,
          status: {
            ...ui.commonInfo.status,
            value: newStatus,
            note
          }
        }
      }
    });
  };

  showEditModal = (showEditModal: boolean) => this.setState({ showEditModal });

  toggleEmailProof = (url: string): void => {
    this.setState((prevState) => {
      return {
        emailProof: {
          show: !prevState.emailProof.show,
          url
        }
      };
    });
  };

  getOrders = (nonZeroProductsExist: boolean) => {
    const { ui } = this.state;
    if (!ui) return null;
    if (ui.orderedItems.items) {
      return nonZeroProductsExist && (
        <OrderedItems
          toggleEmailProof={this.toggleEmailProof}
          ui={ui.orderedItems}
          showRejectionLabel={false}
        />
      );
    }

    return (
      <div>
        {/* shipped items */}
        <GroupContainer
          {...ui.orderedItems.shippedItems}
          toggleEmailProof={this.toggleEmailProof}
        />
        {/* mailing items */}
        <GroupContainer
          {...ui.orderedItems.mailingItems}
          toggleEmailProof={this.toggleEmailProof}
        />
        {/* open items */}
        <GroupContainer
          {...ui.orderedItems.openItems}
          toggleEmailProof={this.toggleEmailProof}
        />
      </div>
    );
  };

  editOrders = ({
    pricingInfo,
    orderedItems,
    ordersPrice
  }: {
    pricingInfo: [],
    orderedItems: [],
    ordersPrice: []
  }) => {
    const { ui } = this.state;
    if (!ui) return;

    this.setState({
      ui: {
        ...ui,
        commonInfo: {
          ...ui.commonInfo,
          totalCost: {
            ...ui.commonInfo.totalCost,
            value: pricingInfo.length ? pricingInfo[pricingInfo.length - 1].value : '' // totalCost is always the last item
          }
        },
        pricingInfo: pricingInfo.length ? {
          ...ui.pricingInfo,
          items: pricingInfo
        } : null,
        orderedItems: {
          ...ui.orderedItems,
          items: ui.orderedItems.items.map((item) => {
            const orderedItem = orderedItems.find(orderedItem => orderedItem.lineNumber === item.lineNumber);
            if (!orderedItem) return item;

            const priceItem = ordersPrice.find(order => order.lineNumber === item.lineNumber);

            return {
              ...item,
              removed: orderedItem.removed,
              quantity: orderedItem.quantity,
              price: priceItem && priceItem.price
            };
          })
        }
      }
    });
  };

  showOrderHistoryModal = (url: string) => {
    this.setState({ showOrderHistory: !this.state.showOrderHistory });
    if (this.state.orderHistory) return; // lazyLoading
    axios
      .get(url)
      .then((response) => {
        const { payload, success, errorMessage } = response.data;
        if (!success) {
          window.store.dispatch({ type: FAILURE, alert: errorMessage });
        } else {
          this.setState({ orderHistory: payload });
        }
      })
      .catch((error) => {
        window.store.dispatch({ type: FAILURE, error });
      });
  };

  updateOrderHistory = (orderHistory: { itemChanges: any, orderChanges: any }) => {
    if (!this.state.orderHistory) return; // by default orderHistory is null and has lazyLoading
    this.setState({
      orderHistory: {
        ...this.state.orderHistory,
        itemChanges: orderHistory.itemChanges,
        orderChanges: orderHistory.orderChanges
      }
    });
  };

  render() {
    const { ui, emailProof } = this.state;
    if (!ui) return <Spinner />;

    const {
      commonInfo,
      shippingInfo,
      paymentInfo,
      pricingInfo,
      orderedItems,
      dateTimeNAString,
      actions,
      general,
      editOrders
    } = ui;

    const shippingInfoEl = shippingInfo ? <div className="col-lg-4 mb-4"><ShippingInfo ui={shippingInfo} /></div> : null;
    const paymentInfoEl = paymentInfo ? <div className="col-lg-4 mb-4"><PaymentInfo ui={paymentInfo} dateTimeNAString={dateTimeNAString} /></div> : null;
    const pricingInfoEl = pricingInfo ? <div className="col-lg-4 mb-4"><PricingInfo ui={pricingInfo} /></div> : null;

    const editModal = editOrders && orderedItems.items
      ? (
        <EditModal
          closeModal={() => this.showEditModal(false)}
          open={this.state.showEditModal}
          orderedItems={orderedItems.items}
          {...editOrders.dialog}
          proceedUrl={this.state.ui ? this.state.ui.editOrders.proceedUrl : ''}
          paidByCreditCard={paymentInfo.paymentIcon === 'credit-card'}
          editOrders={this.editOrders}
          general={general}
          maxOrderQuantity={this.getMaxOrderQuantity()}
          updateOrderHistory={this.updateOrderHistory}
        />
      ) : null;

    const nonZeroProductsExist: boolean = !!orderedItems.items && !!(orderedItems.items.filter((item: { quantity: number }): boolean => item.quantity > 0).length);

    return (
      <div>
        <EmailProof
          open={emailProof.show}
          toggleEmailProof={this.toggleEmailProof}
          emailProofUrl={emailProof.url}
        />
        <OrderHistory
          orderHistory={this.state.orderHistory}
          open={this.state.showOrderHistory}
          closeDialog={this.showOrderHistoryModal}
        />
        {editModal}
        <CommonInfo
          ui={commonInfo}
          dateTimeNAString={dateTimeNAString}
          showOrderHistoryModal={this.showOrderHistoryModal}
        />

        <div className="order-block">
          <div className="row">
            {shippingInfoEl}
            {paymentInfoEl}
            {pricingInfoEl}
          </div>
        </div>

        {this.getOrders(nonZeroProductsExist)}

        <div className="order-block">
          <Actions
            acceptEnabled={nonZeroProductsExist}
            actions={actions}
            editOrders={editOrders}
            editEnabled={nonZeroProductsExist}
            general={general}
            changeStatus={this.changeStatus}
            showEditModal={this.showEditModal}
            changeApprovalMessage={this.changeApprovalMessage}
          />
        </div>
      </div>
    );
  }
}

export default OrderDetail;
