import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import moment from 'moment';
import axios from 'axios';
/* components */
import Dialog from 'app.dump/Dialog';
import Button from 'app.dump/Button';
import SVG from 'app.dump/SVG';
import TextInput from 'app.dump/Form/TextInput';
import Select from 'app.dump/Form/Select';
import Datepicker from 'app.dump/Form/Datepicker';
/* helpers */
import timeFormat, { dateFormat } from 'app.helpers/time';
/* consts */
import { FAILURE, SUCCESS } from 'app.consts';

class ManageOrdersModal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    ui: PropTypes.shape({
      popupTitle: PropTypes.string.isRequired,
      popupButtons: PropTypes.shape({
        cancel: PropTypes.string.isRequired,
        save: PropTypes.string.isRequired
      }).isRequired,
      headers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        label: PropTypes.string.isRequired
      }).isRequired).isRequired,
      submitUrl: PropTypes.string.isRequired,
      validationMessage: PropTypes.string.isRequired
    }).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    manage: PropTypes.func.isRequired
  }

  state = {
    isLoading: false
  };

  componentWillReceiveProps(nextProps) {
    if ((nextProps.open && nextProps.open !== this.props.open) || nextProps.rows !== this.props.rows) {
      const fields = [];

      nextProps.rows.forEach((row, i) => {
        const field = {};
        nextProps.ui.headers.forEach((header) => {
          const item = row.items[header.id];

          if (!item) {
            field[header.id] = '';
          } else {
            field[header.id] = item.value;
          }
        });

        fields[i] = field;
      });

      this.setState({ fields });
    } else if (!nextProps.open && nextProps.open !== this.props.open) {
      this.setState({ fields: [] });
    }
  }

  getHeaders = () => {
    return this.props.ui.headers.map((header) => {
      return <th key={header.id}>{header.label}</th>;
    });
  };

  changeField = (rowNumber, headerId, value) => {
    const newFields = JSON.parse(JSON.stringify(this.state.fields));

    let headerIdValue;
    if (typeof value === 'string') {
      headerIdValue = value;
    } else if (!value) {
      headerIdValue = '';
    } else {
      headerIdValue = value.format();
    }

    newFields[rowNumber] = {
      ...this.state.fields[rowNumber],
      [headerId]: headerIdValue
    };

    this.setState({ fields: newFields });
  };

  addRow = (currentRowIndex) => {
    const newRowIndex = currentRowIndex + 1;
    const fields = JSON.parse(JSON.stringify(this.state.fields));
    const row = JSON.parse(JSON.stringify(fields[currentRowIndex]));
    window.stateField = this.state.fields[currentRowIndex];
    window.field = fields[currentRowIndex];
    // remove editable properties
    this.props.ui.headers.forEach((header) => {
      if (
        header.edit ||
        header.type === 'select' ||
        header.type === 'number' ||
        header.type === 'date'
      ) {
        row[header.id] = '';
      }
    });
    row.new = true;
    fields.splice(newRowIndex, 0, row);
    this.setState({ fields });
  }

  getRows = () => {
    if (!this.props.rows.length) return null;

    return Object.keys(this.state.fields).map((rowNumber, rowIndex) => {
      const items = this.props.ui.headers.map((header, headerIndex) => {
        const item = this.state.fields[rowNumber][header.id];
        if (Array.isArray(item)) {
          return <td key={`${rowNumber}-${header.id}`}>I am array</td>;
        } else if (header.type === 'date') {
          return (
            <td key={`${rowNumber}-${header.id}`}>
              <Datepicker
                selected={item ? moment(item) : null} // when creating new row, the date is null, mament warns it. null bcz of item could be empty string
                dateFormat={dateFormat}
                onChange={date => this.changeField(rowNumber, header.id, date)}
                // readOnly
                // isClearable
              />
            </td>
          );
        } else if (header.type === 'number') {
          return (
            <td key={`${rowNumber}-${header.id}`}>
              <TextInput
                type="number"
                value={item}
                onChange={e => this.changeField(rowNumber, header.id, e.target.value)}
              />
            </td>
          );
        } else if (header.edit) {
          return (
            <td key={`${rowNumber}-${header.id}`}>
              <TextInput
                type="text"
                value={item}
                onChange={e => this.changeField(rowNumber, header.id, e.target.value)}
              />
            </td>
          );
        } else if (header.type === 'select') {
          return (
            <td key={`${rowNumber}-${header.id}`}>
              <Select
                options={header.values}
                placeholder={header.label}
                value={item}
                onChange={e => this.changeField(rowNumber, header.id, e.target.value)}
              />
            </td>
          );
        } else if (headerIndex === this.props.ui.headers.length - 1) {
          return (
            <td key={uuid()}>
              <button
                onClick={() => this.addRow(rowIndex)}
                type="button"
                className="plus-btn"
                style={{ width: 30, height: 30 }}
              >
                <SVG name="plus" />
              </button>
            </td>
          );
        }

        return <td key={`${rowNumber}-${header.id}`}>{item}</td>;
      });

      return <tr key={rowNumber}>{items}</tr>;
    });
  };

  getBody = () => {
    return (
      <table className="show-table">
        <tbody>
          <tr>{this.getHeaders()}</tr>
          {this.getRows()}
        </tbody>
      </table>
    );
  }

  getFooter = () => (
    <div className="btn-group btn-group--right">
      <Button
        text={this.props.ui.popupButtons.cancel}
        type="action"
        btnClass="btn-action--secondary"
        onClick={this.props.closeModal}
      />

      <Button
        text={this.props.ui.popupButtons.save}
        type="action"
        isLoading={this.state.isLoading}
        onClick={this.submit}
      />
    </div>
  );

  getFields = () => {
    // get old fields
    const oldFields = this.state.fields.filter(field => !field.new);
    const addedFields = this.state.fields
      .filter(field => field.new)
      .map((field) => {
        const parent = this.props.rows.filter(row => row.items.orderNumber.value === field.orderNumber);
        return { ...field, lineNumber: parent[0].items.lineNumber.value, trackingInfoId: '' };
      });


    const changedFields = oldFields
      .map((field, index) => ({ ...field, lineNumber: this.props.rows[index].items.lineNumber.value, trackingInfoId: this.props.rows[index].items.trackingInfoId.value }))
      .filter((field, index) => {
        const original = this.props.rows[index].items;
        let changed = false;
        Object.keys(field).forEach((key) => {
          const originalValue = original[key] === undefined ? '' : original[key].value;
          if (field[key] !== originalValue) changed = true;
        });

        return changed;
      });

    return [...changedFields, ...addedFields];
  };

  isValid = (body) => {
    let valid = true;

    body.forEach((field) => {
      const keys = Object.keys(field);
      keys.forEach((key) => {
        const headers = this.props.ui.headers.filter(header => header.id === key);
        if (headers.length) {
          const header = headers[0];
          if (header.type === 'date') {
            if (isNaN(Date.parse(field[key]))) {
              valid = false;
            }
          } else if (header.type === 'number') {
            if (field[key] < 1) {
              valid = false;
            }
          } else if (field[key] === '') {
            if (header.type || header.edit) {
              valid = false;
            }
          }
        }
      });
    });


    return valid;
  };

  submit = () => {
    const body = this.getFields();

    if (!this.isValid(body)) {
      window.store.dispatch({
        type: FAILURE,
        alert: this.props.ui.validationMessage
      });
      return;
    }

    if (!body.length) {
      this.props.closeModal();
      return;
    }

    this.setState({ isLoading: true });

    axios
      .post(this.props.ui.submitUrl, body)
      .then((response) => {
        this.setState({ isLoading: false });
        const { success, payload, errorMessage } = response.data;

        if (success) {
          window.location.reload('');
          // this.props.manage(this.state.fields);
          window.store.dispatch({
            type: SUCCESS,
            alert: payload.message
          });
        } else {
          window.store.dispatch({
            type: FAILURE,
            alert: errorMessage
          });
        }
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        window.store.dispatch({ type: FAILURE, error });
      });
  }

  render() {
    return (
      <Dialog
        closeDialog={this.props.closeModal}
        hasCloseBtn={true}
        title={this.props.ui.popupTitle}
        body={this.getBody()}
        footer={this.getFooter()}
        open={this.props.open}
      />
    );
  }
}

export default ManageOrdersModal;
