import React, { Component } from 'react';

class TempSenderPost extends Component {
  render() {
    //console.log('in TempSenderPost props:' + JSON.stringify(this.props));
    const { senderData } = this.props;
    return (
      <div className="fixedsize-text">
        <div className="text-center">
          <font color="#494ca3">
            <h3>Sender's Post</h3>
          </font>
        </div>
        <div className="spacing-sender-profile" />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="float-left sender-fonts">
              <b>Sender's Caption:</b> {senderData.senderPostCaptionName}
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="float-left">
              <div className="float-left sender-fonts">
                <b>Your Post Ref:</b> {senderData.yourRefPostName}
              </div>
            </div>
          </div>
        </div>
        <div className="spacing-sender-profile" />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <div className="sender-fonts">
              <b>Description:</b>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="float-left">
              <div className="float-left sender-fonts text-align-left">
                <div className="d-flex align-items-start">
                  {senderData.description}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing-sender-profile" />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <div className="sender-fonts">
              <b>Address:</b>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="float-left">
              <div className="float-left sender-fonts text-align-left">
                <div className="d-flex align-items-start">
                  {senderData.senderAddress}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing-sender-profile" />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <div className="float-left sender-fonts">
              <b>Skills:</b>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <div className="float-left">
              <div className="float-left sender-fonts text-align-left">
                <div className="d-flex align-items-start">
                  {senderData.skillList}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacing-sender-profile" />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="float-left sender-fonts">
              <b>Work Type:</b> {senderData.workType}
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="float-left">
              <div className="float-left sender-fonts">
                <b>Location:</b> {senderData.workLocationType}
              </div>
            </div>
          </div>
        </div>
        <div className="spacing-sender-profile" />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="float-left sender-fonts">
              <b>Post date:</b> {senderData.datePosted}
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="float-left">
              <div className="float-left sender-fonts">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TempSenderPost;
