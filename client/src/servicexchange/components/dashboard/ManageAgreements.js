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
      'I production, when you click this, your work will be saved in database. Recipient will receive a notification. Once he/she accepts, the contract will appear in your "Agreement" button in the Lobby. You will also be notified of recipients action.'
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
            <p>(Help-requestor, Master, or Co-op Lead can start this process)</p>
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
                Select posting to initiate / amend an agreement.
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
                placeholder="Select one or more."
              />
            </div>
            <div className="col-6">
              <div className="d-flex align-items-start agreement-notes">
                You can make an agreement with someone or an entity already established in your list. 
                For a co-op, you can select multiple people or entities.
              </div>
            </div>
          </div>
          <div className="agreement-spacing" />
          <div className="row">
            <div className="col-6">
              <TextFieldGroup
                name="newName"
                placeholder="Enter a contract name"
                value={this.state.newName}
                onChange={this.onChange}
                //error={errors.newName}
                info="Give your agreement a name."
              />
            </div>
            <div className="col-6">
              <div className="d-flex align-items-start agreement-notes">
                Enter a unique name for your agreement.
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
                Select an existing contract to amend. Amendments can include
                adding new parties.
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
                  info="Briefly describe the intention of your agreement. This will be used to notify other parties.:"
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
                  When you click on 'Amend' or 'Create' button below, recipients will
                  be notified. When they accept, the agreement will appear in your agreement
                  panel.
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
