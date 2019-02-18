import React, { Component } from 'react';

import '../../../css/dashboard.css';

class ProjDefaultMsg extends Component {

    render() {
        //console.log(JSON.stringify(this.props));
        let msg;
        if (this.props.msgType === 'project') {
            msg = (
                <div className="project-panel-size-dark">
                    <h3>Project Operational Buttons</h3>
                    <div className="row">
                        <div className="col">
                            <div className="text-center default-project-messages">
                                <font color="lightblue">
                                    Provides an overview of operations around projects
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                <strong>Init:</strong> If you are seeing  this, you have already initialized your endeavor. However, you can go an edit if needed.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Team:</strong> Here you build your team. Including every member is a two step process. Get an ‘acknowledgement’ that the other member agrees and ‘association with an agreement.’
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Tasks:</strong> This is where you break a project (endeavor) into tasks and/or sub-projects. You also associate the task to one or more members and request acknowledgement. You can set by default to ‘yes’ but a person can object and provide reasons.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Budget:</strong> Develop a budget associated with tasks and/or sub-project. The  Budget is both time and cost.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Update:</strong> Input state of tasks done in % as well as cost-time incurred. You can also indicate / mention the comments from the receiving part, 3rd party inspector, and include IoT device feed (e.g. picture of completion).
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Status:</strong> This will provide multidimensional charts, graphs of state of the endeavor.
    
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.msgType === 'general') {
            msg = (
                <div className="project-panel-size-dark">
                    <h3>General Operational Buttons</h3>
                    <div className="row">
                        <div className="col">
                            <div className="text-center default-project-messages">
                                <font color="lightblue">
                                    Provides an overview of operations around all endeavors
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                <strong>Feedback:</strong> Allow you (all members) to provide feedback about the project as well as individuals associated with it. This should be used regularly to enable individuals to know how others are appreciating one’s overall contribution. This forms a pillar of DCCS (Dynamic Co-op Chemistry Score)
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Conflict:</strong> If you have any issue around a person of the team or the project overall, this is the right place to handle that. This will also show conflict patterns and intends to reduce conflicts due to miscommunication and/or misunderstanding.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Document:</strong> Associate documents (pdf, jpg, tif, gif, png, blob.webm etc.) with the endeavor (project/tasks) for direct review. You would be able to associate other file types but would need download and use proprietary readers to review them
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Decision:</strong> This is where contextual problem and alternative solutions are voted, contextual decision algorithm followed. This is particularly good for co-ops and for projects to state important decisions. 
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Iot Feed:</strong> This is to be enabled down the road but is provisioned now. A project will be associated wit IoT feed (e.g. video-feed, inspection-feed, barometer reads, drone-deliver etc.) associated with a project.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Assistance:</strong> This is for you to seek assistance from the team. This can be pointed to one or more target members and/or to the whole team. The assistance asked/provided would be evaluated towards DCCS and enable co-operation over competition.
                            </div>
                        </div>
                    </div>
                </div>
            );
        
        } else {
            msg = (
                <div className="project-panel-size-dark">
                    <h3>Initiating an Endeavor</h3>
                    <div className="row">
                        <div className="col">
                            <div className="text-center default-project-messages">
                                <font color="lightblue">
                                    Initiate an endeavor. It may be a new project of traditional delivery, a co-op project, mentoring, scheduled, or  combination per service agreement.
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 1: Click button ‘Init’ for entering all the required information. (Rest of the buttons are inactive at this state)
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 2: If you are a sub-project, then hook it to the parent project from your drop down. If this is a root project, indicate so and you will not be required to hook it to parent project.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 3: Hook the project also to agreement you forged with others for the project. If it is a solitary project (no separate owner, client etc.) then you mention so to avoid hook-up.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 4: Upon ‘Save’, the corresponding parties would be notified  for approval.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                <font color="lightblue">
                                    The  endeavor (project, co-op, engagement) will appear in your dash-list as ‘inactive’ or Blue-color. The ‘Status’ button on ‘Project’ panel will be operational and will indicate he hold up (if any).
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 5: Once cleared/approved by others, rest of the buttons will become active for you to work on. Refer to the user-guide in ‘About’ button in SX if further clarification is needed
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {msg}
            </div>
        );
    }
}

export default ProjDefaultMsg;