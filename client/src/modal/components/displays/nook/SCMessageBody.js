import React, { PureComponent } from 'react';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import './css/nook.css';

//import RBCarousel from 'react-bootstrap-carousel';

class CarouselManualBody extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      toMessage: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);
  }

  handleSendClick() {
    alert(
      'This is an UX or usability experience. Now, your entries are not being saved, sent, or validated. When released in production in few  months, the click of this button will save the data entered.'
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //const errors = this.state;

    //console.log('SCMessage props GGGGGGGGGGGGG: ' + JSON.stringify(this.props));

    let {
      //id,
      from,
      //      title,
      message,
      messageType,
      messageDate
    } = this.props.inputd;

    //let xxx = Date(messageDate, 'YYYY-MM-DD');
    let postDate = Date(messageDate);

    let msgWorkBoard;
    if (messageType === 'Message') {
      msgWorkBoard = (
        <div>
          <div className="text-center">
            <h3>Read - Respond</h3>
          </div>
          <br />

          <div className="row">
            <div className="col-md-4 col-sm-6 float-left">
              <h6>
                Message From: <strong>{from}</strong>
              </h6>
              Date: <strong>{postDate}</strong>
            </div>
            <div className="col-md-8 col-sm-6 text-center">
              <div className="border border-dark message-background shadow p-3 mb-5 bg-white rounded">
                <h6>
                  <font color="#3228a0">{message}</font>
                </h6>
              </div>
            </div>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col">
                <TextAreaFieldGroup
                  placeholder="Text note ..."
                  name="toMessage"
                  value={this.state.toMessage}
                  onChange={this.onChange}
                  // error={errors.toMessage}
                  info="If you want, change default note to text :: "
                />
              </div>
              <div className="float-right">
                <button
                  className="btn btn-primary btn-sm btn-size-same"
                  onClick={this.handleSendClick}
                >
                  Send &nbsp;
                  <i className="fas fa-share-square" />
                </button>
              </div>
            </div>
          </form>
          <div className="textspaceTop" />
          <div className="textspaceTop" />
        </div>
      );
    } else {
      msgWorkBoard = (
        <div>
          <div className="text-center">
            <h3>Accept - Decline - Message</h3>
          </div>
          <br />

          <div className="row">
            <div className="col-md-4 col-sm-6 float-left">
              <h6>
                Invite From: <strong>{from}</strong>
              </h6>
              Date: <strong>{postDate}</strong>
            </div>
            <div className="col-md-8 col-sm-6 text-center">
              <div className="border border-dark message-background shadow p-3 mb-5 bg-white rounded">
                <h6>
                  <font color="#3228a0">{message}</font>
                </h6>
              </div>
            </div>
          </div>

          <form>
            <div className="row">
              <div className="col">
                <TextAreaFieldGroup
                  placeholder="Text note ..."
                  name="toMessage"
                  value={this.state.toMessage}
                  onChange={this.onChange}
                  //error={errors.toMessage}
                  info="If you want, change default note to text :: "
                />
              </div>
            </div>
            {/* <div className="float-right"> */}
            <span className="float-left">
              <button
                className="btn btn-danger btn-sm btn-size-same"
                onClick={this.handleSendClick}
              >
                Decline &nbsp;
                <i className="fas fa-share-square" />
              </button>
            </span>

            <span className="float-right">
              <button
                className="btn btn-success btn-sm btn-size-same"
                onClick={this.handleSendClick}
              >
                Accept &nbsp;
                <i className="fas fa-share-square" />
              </button>
            </span>
            {/* </div> */}
          </form>
          <div className="textspaceTop" />
          <div className="textspaceTop" />
        </div>
      );
    }

    return <div className="container">{msgWorkBoard}</div>;
  }
}

export default CarouselManualBody;
