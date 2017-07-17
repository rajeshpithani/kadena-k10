import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* components */
import Spinner from 'app.dump/Spinner';
/* ac */
import { getUI, modifyAddress } from 'app.ac/settingsAddresses';
/* local components */
import AddressBlock from './AddressBlock';
import AddressDialog from './AddressDialog';

class SettingAddresses extends Component {
  state = {
    isDialogOpen: false,
    address: {}
  };

  static propTypes = {
    ui: PropTypes.shape({
      billing: PropTypes.object,
      shipping: PropTypes.object,
      dialog: PropTypes.object
    }).isRequired
  };

  componentDidMount() {
    this.props.getUI();
  }

  openDialog = (address) => {
    this.setState({
      isDialogOpen: true,
      address
    });
  };

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  changeDataAddress = (data) => {
    const { modifyAddress } = this.props;
    modifyAddress(data);
    this.closeDialog();
  };

  render() {
    const { ui } = this.props;
    const { isDialogOpen, address } = this.state;
    const { dialog, billing, shipping } = ui;

    const commonProps = {
      openDialog: this.openDialog
    };

    return Object.keys(ui).length
    ? <div className="settings__block">
        <AddressDialog isDialogOpen={isDialogOpen}
                       closeDialog={this.closeDialog}
                       changeDataAddress={this.changeDataAddress}
                       dialog={dialog}
                       address={address}
        />

        <AddressBlock ui={billing} {...commonProps} />
        <AddressBlock ui={shipping} {...commonProps} />
      </div>
    : <Spinner />;
  }
}

export default connect((state) => {
  const { settingsAddresses } = state;
  return { ui: settingsAddresses };
}, {
  getUI,
  modifyAddress
})(SettingAddresses);

