import React, { Component } from 'react';
import TextFieldGroup from '../../../components/posts/postInputForms/TextFieldGroup';
import TextAreaFieldGroup from '../../../components/posts/postInputForms/TextAreaFieldGroup';
import Select from 'react-select';
import { options } from './data/agreementList';
import { existingContracts } from './data/existingContracts';
import { postList } from './data/PostList';

import '../../../css/dashboard.css';

class ManageAgreements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: '',
      amendName: '',
      selectedOption: [],
      contractDescription: '',
      existingContract: '',
      existingPosts: ''
    };

    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.handleAmendContract = this.handleAmendContract.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database. This will instantly be notified as message to the recipient. Once he/she accepts, the contract will appear in your "Agreement" office/button at the Lobby. You will also be notified of recipients actions.'
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeTarget = (selectedOption, { action }) => {
    if (selectedOption.length <= 4) {
      this.setState({
        selectedOption
      });
    } else {
      alert(
        'not allowed beyond 4 entries. To select another delete one from the selected or chosen list.'
      );
    }
  };

  handleAmendContract = (contracts, { action }) => {
    this.setState({
      existingContract: contracts
    });
  };

  handleSelectPost = (contracts, { action }) => {
    this.setState({
      existingPosts: contracts
    });
  };

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { selectedOption } = this.state;
    //const { errors } = this.state;

    return (
      <div className="container">
        <div className="text-center">
          <h3>Manage Agreements</h3>
          <font color="green">
            <p>(Help-requestor, Master, or Co-op lead can start this procee)</p>
          </font>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-6">
              <Select
                value={this.state.existingPosts}
                //isMulti
                options={postList}
                //className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleSelectPost}
                placeholder="Select a post ..."
              />
            </div>
            <div className="col-6">
              <div className="d-flex align-items-start agreement-notes">
                Select one of your posting to initiate / ammend an agreement.
              </div>
            </div>
          </div>
          <div className="agreement-spacing" />
          <div className="row">
            <div className="col-6">
              <Select
                value={selectedOption}
                isMulti
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeTarget}
                placeholder="Select multiple for co-op, 1 for rest..."
              />
            </div>
            <div className="col-6">
              <div className="d-flex align-items-start agreement-notes">
                You can make agreement with someone (or entity) with mutual
                interests already established (in the list) and both sides
                interested in the next step. For co-op, you can multi-select or
                amend to include others.
              </div>
            </div>
          </div>
          <div className="agreement-spacing" />
          <div className="row">
            <div className="col-6">
              <TextFieldGroup
                name="newName"
                placeholder="Enter a new contract name"
                value={this.state.newName}
                onChange={this.onChange}
                //error={errors.newName}
                info="Enter a name if creating a new agreement."
              />
            </div>
            <div className="col-6">
              <div className="d-flex align-items-start agreement-notes">
                Enter a unique reference name for new agreement / contract
                creation.
              </div>
            </div>
          </div>
          <div>
            <b>OR</b>
          </div>
          <div className="agreement-spacing" />
          <div className="agreement-spacing" />
          <div className="row">
            <div className="col-6">
              <Select
                value={this.state.existingContract}
                //isMulti
                options={existingContracts}
                //className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleAmendContract}
                placeholder="Select an existing contract"
              />
            </div>
            <div className="col-6">
              <div className="d-flex align-items-start agreement-notes">
                Select an existing contract if you want to amend, that includes,
                inclusion of new members.
              </div>
            </div>
          </div>
          <div className="agreement-spacing" />
          <div className="agreement-spacing" />
          <div className="row">
            <div className="col">
              <div className="agreement-notes">
                <TextAreaFieldGroup
                  placeholder="Describe your contract intention "
                  name="contractDescription"
                  value={this.state.contractDescription}
                  onChange={this.onChange}
                  //error={errors.contractDescription}
                  rows={2}
                  info="Describe your agreement intention in small statement / note for notification.:"
                  must="Must Provide"
                />
              </div>
            </div>
          </div>
          <div className="agreement-spacing" />
          <div className="row">
            <div className="col">
              <div className="agreement-notes">
                <b>
                  OnClick of 'Amend' or 'Create' buttons below, recipient will
                  be notified. On acceptance, this will appear in your Agreement
                  panel accessable from the Lobby.
                </b>
              </div>
            </div>
          </div>
          <div className="agreement-spacing" />
          <div className="row">
            <div className="col-md-6">&nbsp;</div>
            <div className="col-md-6">
              <div className="float-right">
                <button
                  className="btn control-btn-amend"
                  onClick={this.handleSaveClick}
                >
                  Amend &nbsp;
                  <i className="far fa-calendar-plus float-right" />
                </button>
                <button
                  className="btn control-btn-create"
                  onClick={this.handleSaveClick}
                >
                  Create &nbsp;
                  <i className="fa fa-check float-right" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ManageAgreements;
