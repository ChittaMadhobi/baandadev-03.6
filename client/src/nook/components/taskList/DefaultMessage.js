import React, { Component } from 'react';

import '../../css/profile.css';

class DefaultMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="white">Manage your To-Do List and Personal Wiki</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Create a to-do list (an automated check list).
                </p>
                <p className="card-test">
                  Keep your personal wiki for future reference.
                </p>
                <br />
                <p className="card-test">
                  <font color="lightblue">
                    In the personal wiki UX scope, the audio, visual, audio-to-text and multi-conduit search and listening / viewing is not being implemented at this time. Please refer to the [Lobby->Service Xchange->Dashboard->SX related messaging] to get the feel of how it will be in live production. In The Nook (here), your recordings will be saved for later review. If you forward any of your assets, Baanda will not be responsble for its privacy ... but, you will be able to forward any of your journal-entries to anyone in your social circle. In the future, your entries will be encrypted with your biometrics so even Baanda cannot share it with anyone else.
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultMessage;
