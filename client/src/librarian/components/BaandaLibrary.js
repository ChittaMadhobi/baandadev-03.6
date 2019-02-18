import React, { Component } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';

import onepagera from '../img/onePage-RA.png';
import libraryInfo from '../img/libraryInfo.png';
import editorial from '../img/editorial.png';
import browseNread from '../img/browsenread.jpg';

class BaandaLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      name: '',
      counter: 0,
      question: '',
      answer: '',
      response: ['Hello. I am Baanda. How can I assist?'],
      errors: {},
      AboutLibraryPanel: true,
      LibrarianPanel: false,
      browseQnAPanel: false,
      audioVideoPanel: false,
      editorialPanel: false,
      baandaArchPanel: false,
      usingBaanda: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.input = React.createRef();
  }

  componentDidMount() {
    console.log('componentDidMount()');
    if (this.props.auth.isAuthenticated) {
      this.setState({ name: this.props.auth.user.name });
      console.log(
        'onMount .. isAuthenticated is true name:' + this.props.auth.user.name
      );
      console.log('this state name : ' + this.state.name);
    } else {
      if (this.state.start) {
        return <Redirect to="/" />;
      }
      console.log('onmount .. isAuthenticated is FALSE');
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const qq = this.input.current.value;
    // Call getDFResponse
    console.log('onSubmit Q:' + qq);
    if (!this.getDFResponse(qq)) {
      console.log('getDFResponse failed .... :(');
    }
    this.input.current.value = '';
  }

  getDFResponse(question) {
    let baseUrl = 'https://api.api.ai/v1/';
    //let url = baseUrl + 'query?v=20170712';
    // console.log('url = ' + url);
    //=========== IMPORTANT =============FIX IT WHEN YOU CAN =============
    // IF the user is loggin in, then use their baandaid as the sessionId
    // If unauthenticated user, use the random #
    // ++++++++++++++++++++++ FIX IT ++++++++++++++++++++++++++++++++++++
    let randomnumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    //let dfsesionid = randomnumber.toString();
    axios({
      method: 'post',
      url: baseUrl + 'query?v=20170712',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        Authorization: 'Bearer 8752d1067e904b20a5004db0ac84cdd8'
      },
      data: {
        query: question,
        lang: 'en',
        sessionId: randomnumber
      }
    })
      .then(res => {
        // console.log('question: ' + question);
        let answer = res.data.result.fulfillment.speech;
        // console.log('response : ' + answer);
        // console.log('Calling createUIResponse');
        this.createUIResponse(question, answer);
        return true;
      })
      .catch(err => {
        console.log('axios error: ' + err.response.data);
        this.setState({ errors: err.response.data });
        return false;
      });
  }

  createUIResponse(question, answer) {
    var logger = document.getElementById('log');

    let counter = this.state.counter + 1;

    //console.log('Inside createUIResp : name ' + this.props.auth.user.name);
    var name = '';
    if (this.props.auth.isAuthenticated) {
      name = this.props.auth.user.name;
    } else {
      name = 'You';
    }

    logger.innerHTML +=
      '<font size=3 color=#990000> &nbsp;' +
      counter.toString() +
      '. ' +
      name +
      '> ' +
      question +
      '</font><br />' +
      '<img class="logo" src=./baandalogo-2.png alt=logo > ' +
      '<font size=4 color=#4286f4><strong> : ' +
      answer +
      '</strong></font><br /><br />';

    logger.scrollTop = logger.scrollHeight;

    this.setThisState(question, answer);
    return true;
  }

  setThisState(question, answer) {
    let resp =
      '<' +
      this.state.counter.toString() +
      ' Q: ' +
      question +
      ' |A:' +
      answer +
      '>';

    // setState
    this.setState({
      start: false,
      question: question,
      counter: this.state.counter + 1,
      answer: answer,
      response: [...this.state.response, resp]
    });

    return true;
  }

  render() {
    //const { errors } = this.state;
    let libContext = '';

    if (this.state.AboutLibraryPanel) {
      libContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={libraryInfo} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.LibrarianPanel) {
      libContext = (
        <div className="workarea-padding">
          <div className="shadow-lg border-dark">
            <div
              id="log"
              className="border border-dark rounded demofixedsize"
            />
          </div>
          <div className="w-100" />
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                placeholder="Ask something in small sentenses please :)"
                name="question"
                type="text"
                ref={this.input}
                value={this.state.questionvalue}
                onChange={this.onChange}
              />
              <div className="btn-group d-flex " role="group" aria-label="...">
                <button
                  className="btn btn-primary w-75"
                  onClick={this.onSubmit}
                >
                  Submit - Type your ask first
                </button>
                &nbsp;
                <button className="btn btn-info w-25" disabled="disabled">
                  <i className="fa fa-microphone" /> &nbsp; TBD
                </button>
              </div>

              {/*<input type="submit" className="btn btn-info btn-block mt-4" /> */}
            </div>
          </form>
        </div>
      );
    }

    if (this.state.audioVideoPanel) {
      libContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <p>
              A listener, or viewer, would have the opportunity of searching
              audio-video content by category, creator, name, meta-tags (as
              stated by creator during publishing). The listener would be able
              to comment on the work. In future releases, a listener or viewer
              would be able to keep small audio or video response as comments
              too.
            </p>
            <ReactPlayer
              url="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
              className="react-player"
              playing="true"
              controls="true"
              width="100%"
              height="480px"
            />
            {/* <ReactPlayer
              url="https://s3-us-west-2.amazonaws.com/baandadev1/videoMsg4.webm"
              className="react-player"
              playing="true"
              controls="true"
              width="100%"
              height="480px"
            /> */}
          </div>
        </div>
      );
    }

    if (this.state.browseQnAPanel) {
      libContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <p>
              Reader will have the opportunity of searching by category, author,
              publication-names and meta-tag (as stated by author during
              publishing). A reader would be able to read and write comments or
              comments-on-a-comment thereby emulating on-line debate.{' '}
            </p>
            <div className="pictures">
              <img src={browseNread} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.editorialPanel) {
      libContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={editorial} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.baandaArchPanel) {
      libContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            August, 2018
            <div className="pictures">
              <img src={onepagera} width="100" height="1100" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.usingBaanda) {
      libContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="text-center">
              <h5>Baanda Systems Usage & Reporting</h5>
            </div>
            <p>
              Baanda is expected to become a cooperation oriented global market
              place. A user may, or would, need direction. Every section will
              have their own user’s manual. This section would carry
              usage-guidance for all sections.
            </p>
            <p>
              In the beginning, Service Xchange (SX) is the focus of Baanda and
              rest of the offices is likely to cater to SX usage. However, a
              user can ask specific service without SX. Over time, there would
              be evolving functionalities and user would continue to get
              directions from this section intelligently and contextually.{' '}
            </p>
            <p>
              This section would also allow users to leave comments on
              improvement, confusions, and/or ideas for Baanda engineers and
              designers to consider for improving the services.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="library">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">Library - Learn & Share</h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      AboutLibraryPanel: true,
                      LibrarianPanel: false,
                      browseQnAPanel: false,
                      audioVideoPanel: false,
                      editorialPanel: false,
                      baandaArchPanel: false,
                      usingBaanda: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Overview of what Baanda  Library is all about."
                >
                  About Library
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      AboutLibraryPanel: false,
                      LibrarianPanel: true,
                      browseQnAPanel: false,
                      audioVideoPanel: false,
                      editorialPanel: false,
                      baandaArchPanel: false,
                      usingBaanda: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Have an intelligent conversation with the librarian."
                >
                  Librarian
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      AboutLibraryPanel: false,
                      LibrarianPanel: false,
                      browseQnAPanel: true,
                      audioVideoPanel: false,
                      editorialPanel: false,
                      baandaArchPanel: false,
                      usingBaanda: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Browse-read Q&A arranged via category."
                >
                  Browse-read
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      AboutLibraryPanel: false,
                      LibrarianPanel: false,
                      browseQnAPanel: false,
                      audioVideoPanel: true,
                      editorialPanel: false,
                      baandaArchPanel: false,
                      usingBaanda: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Audio-visual - search, browse and experience."
                >
                  Audio-Visual
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      AboutLibraryPanel: false,
                      LibrarianPanel: false,
                      browseQnAPanel: false,
                      audioVideoPanel: false,
                      editorialPanel: true,
                      baandaArchPanel: false,
                      usingBaanda: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Share and publish your ideas and creations."
                >
                  Editorial
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      AboutLibraryPanel: false,
                      LibrarianPanel: false,
                      browseQnAPanel: false,
                      audioVideoPanel: false,
                      editorialPanel: false,
                      baandaArchPanel: true,
                      usingBaanda: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Shows a snapshot of current architecture, state and next-milestone."
                >
                  Arch. & States
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-info btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      AboutLibraryPanel: false,
                      LibrarianPanel: false,
                      browseQnAPanel: false,
                      audioVideoPanel: false,
                      editorialPanel: false,
                      baandaArchPanel: false,
                      usingBaanda: true
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Baanda usage guides and improvement feedback center."
                >
                  Using Baanda
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">
              <div>{libContext}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BaandaLibrary.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(BaandaLibrary);
