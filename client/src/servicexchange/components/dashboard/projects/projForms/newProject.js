import React, { Component } from 'react';

import TextFieldGroup from '../../../../../utils/TextFieldGroup';
import TextAreaFieldGroup from '../../../../../utils/TextAreaFieldGroup';

import { RadioGroup, Radio } from 'react-radio-group';
import Select from 'react-select';

import { projects } from './projectList';
import { serviceRequestor } from './ServiceRequestorList';
import { engagementDomains } from './engagementDomain';
import { contracts } from './ContractList';

import '../../../../css/dashboard.css';

class newProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            engagementName: '',
            engagementType: '',  // Project, co-op, mentor, scheduled
            description: '',
            projectLevel: '',
            govStyle: '', //hierarchical, peer-to-peer
            selectedParentProj: '',
            selectedServiceRecipiant: '',
            engagementDomain: '',
            otherDomainName: '',
            parentContract: '',

            projMessage: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.SelectEngagementType = this.SelectEngagementType.bind(this);
        this.SelectprojectLevel = this.SelectprojectLevel.bind(this);
        this.selectParentProj = this.selectParentProj.bind(this);
        this.selectServiceRecipiant = this.selectServiceRecipiant.bind(this);
        this.selectEngagementDomain = this.selectEngagementDomain.bind(this);
        this.selectParentContract = this.selectParentContract.bind(this);
        this.SelectGovStyle = this.SelectGovStyle.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    componentWillMount() {
        // Remove localStorage 
        console.log('localstorage proj:' + localStorage.getItem('newproj'));
        //localStorage.removeItem('newproj');
        localStorage.clear();
        //console.log('componentWillMount props::' + JSON.stringify(this.props.propForward.propForward));
        if (this.props.invokeType === 'ProjectEdit') {
            // console.log('inside ...' + this.props.propForward.propForward.msg.engagementName);
            this.setState({
                engagementName: this.props.propForward.propForward.msg.engagementName,
                engagementType: this.props.propForward.propForward.msg.engagementType,  // Project, co-op, mentor, scheduled
                description: this.props.propForward.propForward.msg.description,
                projectLevel: 'rootProject',
                govStyle: 'peerToPeer', //hierarchical, peer-to-peer
                selectedParentProj: '',
                selectedServiceRecipiant: '',
                engagementDomain: {
                    value: '100',
                    label: 'Art - Painting, Music, Sculptor, Dance etc.',
                    color: '#FF8B00'
                },
                otherDomainName: '',
                parentContract: '',
                projMessage: 'Message: As PM, you can edit this. If you change project-level and recipient, project updates have to wait till they accept that.'
            })
        }
    }

    SelectGovStyle = (govStyle) => {
        this.setState({
            govStyle
        })
    }

    handleSaveClick() {
        let err = '';
        if (this.state.engagementName === '' || this.state.description === '') {
            err = "ERROR: Please fill out your project initiation properly. Mandatory fields needs to be filled out.";
        }
        alert(
            'Eventually -- When you click this, your work will be saved in database. Right now, a symbolic data-iota would be saved in local storage to simulate UX. However, if you return to this new project again, the process will start all over. In real life, it will open saved data (if you are the PM)......' + err
        );
        let newproj = {
            name: this.state.engagementName,
            projLevel: this.state.projectLevel,
            description: this.state.description
        }
        // console.log('save newproj:' + JSON.stringify(newproj));
        localStorage.setItem('newproj', JSON.stringify(newproj));
    }

    selectParentContract = (parentContract) => {
        this.setState({
            parentContract
        })
    }

    selectEngagementDomain = (engagementDomain) => {
        this.setState({
            engagementDomain
        })
    }

    selectServiceRecipiant = (selectedServiceRecipiant) => {
        this.setState({
            selectedServiceRecipiant
        })
    }
    selectParentProj = (selectedParentProj) => {
        this.setState({
            selectedParentProj
        })
    }

    selectParentProj = (selectedParentProj) => {
        this.setState({
            selectedParentProj
        })
    }

    SelectprojectLevel = (value) => {
        this.setState({
            projectLevel: value
        });
    }

    SelectEngagementType = (value) => {
        this.setState({
            engagementType: value
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
    }


    render() {
        const { errors } = this.state;
        // console.log('newProject state: ' + JSON.stringify(this.state));
        // console.log('------------------------------------');
        // console.log('newProject props: ' + JSON.stringify(this.props));
        // console.log('invokeType: ' + this.props.invokeType);

        let parentProj, parentContract;
        if (this.state.projectLevel === 'subProject') {
            parentProj = (
                <Select
                    value={this.state.selectedParentProj}
                    onChange={this.selectParentProj}
                    options={projects}
                    maxMenuHeight={130}
                    isSearchable
                    placeholder="Selelct a parent project for PM notification"
                />
            );
            parentContract = (
                <div>
                    <font color="blue">
                        <Select
                            value={this.state.parentContract}
                            onChange={this.selectParentContract}
                            options={contracts}
                            maxMenuHeight={130}
                            isSearchable
                            placeholder="Selelct a contract with parent contract"
                        />
                    </font>
                </div>
            )
        } else if (this.state.projectLevel === 'nonProject') {
            parentProj = (
                <Select
                    value={this.state.selectedServiceRecipiant}
                    onChange={this.selectServiceRecipiant}
                    options={serviceRequestor}
                    maxMenuHeight={130}
                    isSearchable
                    placeholder="Selelct a Service Requestor for notification"
                />
            );
            parentContract = null;
        } else {
            parentProj = null;
            parentContract = null;
        }


        let otherDomain;
        if (this.state.engagementDomain.value === 'Other') {
            otherDomain = (
                <div className="text-align-left">
                    <TextFieldGroup
                        name="otherDomainName"
                        placeholder="Enter alternate domain name ..."
                        value={this.state.otherDomainName}
                        onChange={this.onChange}
                        error={errors.otherDomainName}
                        info="Provide a high-level domain not in the list.."
                        must="Mandatory"
                    />
                </div>
            )
        } else {
            otherDomain = null;
        }


        let heading;
        let engagementName;
        let engagementType;
        let description;
        let projectLevel;
        let selectEngagementDomain;
        let govStyle;
        let saveButton;
        if (this.props.invokeType === "ProjectShow") {
            heading = (
                <div><h3>Your Engagement Model (For View Only)</h3></div>
            );
            engagementName = (
                <p><b>Engagement Name:</b> {this.props.propForward.propForward.msg.engagementName}</p>
            );
            engagementType = (
                <div><b>This is a </b>Time-based Service Engagement</div>
            );
            description = (
                <div><b>Description:</b> {this.props.propForward.propForward.msg.description} </div>
            );
            projectLevel = (
                <div className="float-left"><b>This is a </b>Root-Level Engagement/Project</div>
            );
            selectEngagementDomain = (
                <div><b>Engagement Domain: </b> Hospitality - Restaurant</div>
            );
            govStyle = (
                <div><b>Governance Style if</b> hierarchical </div>
            );
            saveButton = (
                <div><b>Manager is </b>{this.props.propForward.propForward.msg.engagementMgr}</div>
            )
        } else {
            heading = (
                <div><h3>Engagement Initiation Information Entry</h3></div>
            );
            engagementName = (
                <TextFieldGroup
                    name="engagementName"
                    placeholder="Enter engagement or project ..."
                    value={this.state.engagementName}
                    onChange={this.onChange}
                    error={errors.engagementName}
                    info="State a unique name; this would be in your proj. mgmt. dashboard.."
                    must="Mandatory"
                />
            );
            engagementType = (
                <RadioGroup
                    name="engagementType"
                    selectedValue={this.state.engagementType}
                    onChange={this.SelectEngagementType}
                >
                    {' '}
                    <label>
                        <h6>This is a&nbsp;&nbsp;</h6>
                    </label>
                    <label>
                        <Radio value="project" />
                        &nbsp;Project&nbsp;&nbsp;
                                </label>
                    <label>
                        <Radio value="co-op" />
                        &nbsp;Co-op&nbsp;&nbsp;
                                </label>
                    <label>
                        <Radio value="masterApprentice" />
                        &nbsp;Master&nbsp;&nbsp;
                                </label>
                    <label>
                        <Radio value="TimeBaseServices" />
                        &nbsp;Time-based
                                </label>
                </RadioGroup>
            );
            description = (
                <TextAreaFieldGroup
                    placeholder="A short description of your engagement, project, sub-project etc."
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    rows={3}
                    error={errors.description}
                    info="Provide a short description for a quick references .."
                    must="Mandatory"
                />
            );
            projectLevel = (
                <RadioGroup
                    name="projectLevel"
                    selectedValue={this.state.projectLevel}
                    onChange={this.SelectprojectLevel}
                >
                    {' '}
                    <label>
                        <h6>This is a&nbsp;&nbsp;</h6>
                    </label>
                    <label>
                        <Radio value="rootProject" />
                        &nbsp;Root-project&nbsp;&nbsp;
                </label>
                    <label>
                        <Radio value="subProject" />
                        &nbsp;Sub-project&nbsp;&nbsp;
                </label>
                    <label>
                        <Radio value="nonProject" />
                        &nbsp;Not a project
                </label>
                </RadioGroup>
            );
            selectEngagementDomain = (
                <font color="blue">
                    <Select
                        onChange={this.selectEngagementDomain}
                        options={engagementDomains}
                        maxMenuHeight={130}
                        isSearchable
                        placeholder="Selelct a high-level engagement domain."
                    />
                </font>
            );
            govStyle = (
                <RadioGroup
                    name="govStyle"
                    selectedValue={this.state.govStyle}
                    onChange={this.SelectGovStyle}
                >
                    {' '}
                    <label>
                        <h6>Governance style is &nbsp;&nbsp;</h6>
                    </label>
                    <label>
                        <Radio value="hierarchical" />
                        &nbsp;Hierarchy&nbsp;&nbsp;
                </label>
                    <label>
                        <Radio value="peerToPeer" />
                        &nbsp;PeerToPeer&nbsp;&nbsp;
                </label>

                </RadioGroup>
            );
            saveButton = (
                <button
                    className="btn-start-new-proj"
                    onClick={this.handleSaveClick}
                >
                    Save & Notify&nbsp;
                    <i className="fa fa-check" />
                </button>
            );
        }


        return (
            <div className="container project-panel-formentry-blue">
                {heading}
                <div className="project-form-spacing" />
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-align-left">
                                {engagementName}
                            </div>
                        </div>
                        <div className="col-md-6">
                            {engagementType}
                        </div>
                    </div>
                    <div className="project-form-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="text-align-left">
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="project-form-spacing" />
                    <div className="row">
                        <div className="col-md-6">
                            {projectLevel}
                        </div>
                        <div className="col-md-6">
                            <font color="blue">{parentProj}</font>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">&nbsp;</div>
                        <div className="col-md-6">{parentContract}</div>
                    </div>
                    <div className="project-form-spacing" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-align-left">
                                {selectEngagementDomain}
                            </div>
                        </div>
                        <div className="col-md-6">
                            {otherDomain}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            &nbsp;
                        </div>
                        <div className="col-md-6">
                            {govStyle}
                        </div>
                    </div>
                    <div className="project-form-spacing" />
                    <div className="row">
                        <div className="col-md-6">
                            &nbsp;
                        </div>
                        <div className="col-md-6">
                            {saveButton}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                {this.state.projMessage}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default newProject;