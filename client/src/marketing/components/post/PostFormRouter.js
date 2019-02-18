import React, { Component } from 'react';

import DefaultMessage from './DefaultMessage';
import CrowdFunding from './postforms/CrowdFunding';
import MessagePropagation from './postforms/MessagePropagation';

import './post.css';

class PostFormRouter extends Component {
  render() {
    const { selectValue } = this.props;
    //console.log('selectValue:' + selectValue);
    let output;
    if (selectValue === 'none') {
      output = (
        <div>
          <DefaultMessage />
        </div>
      );
    }

    if (selectValue === 'crowdsource') {
      output = (
        <div>
          <CrowdFunding />
        </div>
      );
    }

    if (selectValue === 'msgPropagation') {
      output = (
        <div>
          <MessagePropagation />
        </div>
      );
    }

    if (selectValue === 'catalogue') {
      output = (
        <div>
					<div className="spacing" />
          <div className="spacing" />
					<div className="text-center">
						<h5>Catalogue System Outline (work in progress)</h5>
					</div>
          <div className="spacing" />
					<div className="row">
						<div className="col-2">&nbsp;</div>
						<div className="col-8">
							<font color="lightyellow" size="3">
								<p align="justify">
									<b>Catalog publication</b> is focused towards small endeavors; individulized service or product trading; small businesses catering to localized customer based etc. 
								</p>
                <p align="justify">
									The intent of this is to enable sellers (offerers) and buyer (consumers) to have an in-person interaction that is in contrast to impersonal prevailing e-commerce. Baanda will know of individual's needs and traits via their life activities of both parties. Baanda will enable form-based entry and, in line with the pattern, publisher can work with the catalogue via Marketspace dashboard. Aletrnatively, if the catalogue is already available as a software 3rd party system, Baanda will work with the partner to see if an API based interface can be opened up.
								</p>
								<p align="justify">
									In next release, Angelo and his group will attach a catalogue for selling their art-gallery products as an example. 
								</p>
							</font>
						</div>
						<div className="col-2">&nbsp;</div>
					</div>
				</div>
      );
    }

    if (selectValue === 'participate') {
      output = (
        <div>
					<div className="spacing" />
          <div className="spacing" />
					<div className="text-center">
						<h5>Participation-Contribution Posting Outline (work in progress)</h5>
					</div>
          <div className="spacing" />
					<div className="row">
						<div className="col-2">&nbsp;</div>
						<div className="col-8">
							<font color="lightyellow" size="3">
								<p align="justify">
									<b>Participation and Contribution</b> post is focused towards individuals who wants to contribute and/or participate in various activities but has his/her own special interests. 
								</p>
                <p align="justify">
									The intent of this is to enable individuals to setup their desires, specifications, that would include intent, driving force, geolocation, and other related factors. Baanda will use individual's personality and life-context along with his/her wishes posted here and will match intelligently. This will also notify if new match appears that is a good fit for his/her point of view. 
								</p>
							</font>
						</div>
						<div className="col-2">&nbsp;</div>
					</div>
				</div>
      );
    }


    return (
      <div className="col-lg-12 col-md-8 col-sm-6">
        <div>{output}</div>
      </div>
    );
  }
}

export default PostFormRouter;
