import React, { Component } from 'react';

import './post.css';

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
										<font color="white">Posts </font>
									</strong>
								</h5>
								<p className="card-test">Please select the posting type from the drop-down menu.</p>
								<p className="card-test">
									<font color="lightyellow">
										There are different kinds of posting for MarketSpace. However, all posts are for
										individual's (yours) point-of-view. All post and ops are contextual. Be careful
										when you post for your posts will appear in your pending agreements. That will
										ensue contracts around your promises, deliverable, consequences and involves
										money in some form or other.
									</font>
								</p>
								<p className="card-test">
									<font color="lightblue">**</font> Mandatory fields are indicated as mandatory.
								</p>
								<p className="card-test">
									<font color="lightblue">**</font> Some fields are not visible to anyone other than
									you. They are needed for matching algorithms only and will be indicated as such.
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
