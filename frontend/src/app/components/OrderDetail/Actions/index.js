import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
/* constants */
import { FAILURE } from 'app.consts';
/* components */
import Button from 'app.dump/Button';
import Textarea from 'app.dump/Form/Textarea';
/* local components */
import Modal from './Modal';

const actionPropTypes = {
  button: PropTypes.string.isRequired,
  proceedUrl: PropTypes.string.isRequired,
  dialog: PropTypes.object
};

class Actions extends Component {
  state = {
    showReject: false,
    proceeded: false,
    rejectionNote: '',
    isLoading: false
  };

  static propTypes = {
    actions: PropTypes.shape({
      accept: PropTypes.shape({ ...actionPropTypes }),
      reject: PropTypes.shape({ ...actionPropTypes })
    }).isRequired,
    editOrders: PropTypes.shape({
      button: PropTypes.string.isRequired,
      proceedUrl: PropTypes.string.isRequired
    }),
    general: PropTypes.object.isRequired,
    changeStatus: PropTypes.func.isRequired,
    showEditModal: PropTypes.func.isRequired,
    acceptEnabled: PropTypes.bool.isRequired,
    editEnabled: PropTypes.bool.isRequired
  };

  handleShowReject = () => this.setState({ showReject: true });
  handleHideReject = () => this.setState({ showReject: false });
  handleProceed = () => this.setState({ proceeded: true });
  handleChangeRejectionNote = rejectionNote => this.setState({ rejectionNote });

  submit = async (url) => {
    try {
      this.setState({ isLoading: true });
      const body = {
        ...this.props.general,
        rejectionNote: this.state.rejectionNote
      };

      const res = await axios.post(url, body);
      const { success, payload, errorMessage } = res.data;

      if (!success || !payload) {
        window.store.dispatch({
          type: FAILURE,
          alert: errorMessage
        });
      } else {
        this.handleProceed();
        toastr.success(payload.title, payload.text);
        this.props.changeStatus(payload.newStatus, this.state.rejectionNote);
        this.handleChangeRejectionNote('');
      }
    } catch (error) {
      window.store.dispatch({
        type: FAILURE,
        error
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      acceptEnabled,
      actions,
      editEnabled,
      editOrders
    } = this.props;
    const { proceeded, rejectionNote, isLoading } = this.state;

    const editButton = (editOrders && editEnabled)
      ? (
        <Button
          text={this.props.editOrders.button}
          disabled={proceeded}
          type="action"
          btnClass="mr-2"
          onClick={() => {
            if (proceeded) return;
            this.props.showEditModal(true);
          }}
        />
      ) : null;

    const commentBlock = this.props.actions
      ? (
        <Textarea
          label={actions.comment.title}
          value={rejectionNote}
          rows={4}
          disabled={proceeded}
          wpapperClass="order-block__comment"
          onChange={e => this.handleChangeRejectionNote(e.target.value)}
        />
      ) : null;

    const acceptButton = (actions && acceptEnabled)
      ? (
        <Button
          key={1}
          text={actions.accept.button}
          type="success"
          btnClass="mr-2"
          disabled={proceeded}
          isLoading={isLoading}
          onClick={() => {
            if (proceeded) return;
            this.submit(actions.accept.proceedUrl);
          }}
        />
      ) : null;

    const rejectButton = actions
      ? (
        <Button
          key={2}
          text={actions.reject.button}
          type="danger"
          disabled={proceeded}
          isLoading={isLoading}
          onClick={proceeded ? () => { } : this.handleShowReject}
        />
      ) : null;

    return (
      <div className="text-right">
          {this.state.showReject && <Modal submit={() => this.submit(actions.reject.proceedUrl)} closeDialog={this.handleHideReject} {...actions.reject.dialog } />}

        {commentBlock}
        {editButton}
        {acceptButton}
        {rejectButton}
      </div>
    );
  }
}

export default Actions;
