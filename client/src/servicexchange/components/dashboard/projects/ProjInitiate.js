import React, { Component } from 'react';

// import TextFieldGroup from '../../../../utils/TextFieldGroup';
// import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import NewProject from './projForms/newProject';

class ProjInitiate extends Component {
    componentWillMount() {
        // Remove localStorage 
        //console.log('1. ProjInitiate ... localstorage proj:' + localStorage.getItem('newproj'));
        //localStorage.rmoveItem('newproj');
        localStorage.clear();
        //console.log('2. ProjInitiate ... localstorage proj:' + localStorage.getItem('newproj'));
    }

    render() {
        let invokeType = this.props.msgType;
        let isPM = this.props.owner;
        //console.log('ProjInitiate props:' + JSON.stringify(this.props));

        let projEntryForm;
        if (invokeType === 'NewProjectInit') {
            projEntryForm = (
                <div>
                    <NewProject invokeType="NewProjectInit"/>
                </div>
            );
        } else {
            if (isPM) {
                projEntryForm = (
                    <div>
                        <NewProject invokeType="ProjectEdit" propForward={this.props}/>
                    </div>
                );
            } else {
                projEntryForm = (
                    <div>
                        <NewProject invokeType="ProjectShow" propForward={this.props}/>
                    </div>
                );
            }
        }

        return (
            <div>
                {projEntryForm}
            </div>
        );
    }
}

export default ProjInitiate;