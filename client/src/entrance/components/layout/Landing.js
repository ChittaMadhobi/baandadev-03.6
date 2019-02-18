/*
**  Author: Jit (Sarbojit Mukherjee)
**  Desc:   Provides the basic landing for Baanda with two opetions ... to chat with Baanda
**          or login / signin to get to the lobby
**  Note:   Every program and aspects of Baanda_dev, as of this day, is being coded and handled by Jit
**  Date:   July 9, 2018
**  Version:0.01
*/
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';
// //import { Redirect } from 'react-router-dom';

// class Landing extends Component {
//   // If someone use URL host:port/login ... it should not take to login if already so
//   constructor() {
//     super();
//     this.state = {
//       theNook: false,
//       theSX: false
//     };
//   }

//   componentDidMount() {
//     // if (this.props.auth.isAuthenticated) {
//     //   this.props.history.push('/lobby');
//     // }
//     if (!this.props.auth.isAuthenticated) {
//       //return <Redirect to="/login" />;
//       this.props.history.push('/login');
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="lobbyheader">
//           <div className="row text-left text_white">
//             <div className="col-12">
//               <div className="headerpic headerpicLeftPad">
//                 <span className="align-baseline-left">
//                   <h1>The Lobby</h1>
//                 </span>
//                 <span className="align-baseline-left">
//                   <h4>For Cooperation & Togethreness</h4>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="landing-inner text-dark">
//           <div className="row">
//             <div className="col-lg-2 col-md-4 col-sm-6">
//               <div className="textspaceTop" />
//               <div className="text-center">
//                 <p>
//                   Start with entering your profine in Your Nook. 'Info Center'
//                   is like a library (Read, see video, etc.). All modules has
//                   separate focused help.{' '}
//                 </p>
//               </div>
//               <div>
//                 <Link
//                   to="/baandaReception"
//                   className="btn btn-outline-info btn-block"
//                 >
//                   <strong>Click to chat</strong>
//                 </Link>
//               </div>
//             </div>

//             <div className="col-md-4 col-sm-4 col-xs-2">
//               <div className="lobbyNook">
//                 <div className="row text-left text_white">
//                   <div className="col-12">
//                     <div className="headerpic headerpicLeftPad">
//                       <span className="align-baseline-left">
//                         <h3>You and your friends</h3>
//                       </span>
//                       <ul className="list-inline">
//                         <li className="list-inline-item">
//                           {' '}
//                           <i className="fa fa-check" />
//                           &nbsp; Setup profile
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Talk to Baanda
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Handle tasks
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Be with friends
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Aspire - Dream
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="caption">
//                 <p />
//                 <h4 className="text-center">
//                   <font color="teal">
//                     <strong>Your Nook</strong>
//                   </font>
//                 </h4>
//                 <div className="text-center">
//                   <div className="btn-group btn-trigger">
//                     <Link to="/nook" className="btn btn-lg btn-info">
//                       <strong>Enter & Engage</strong>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 col-sm-4 col-xs-2">
//               <div className="lobbySX">
//                 <div className="row text-left text_white">
//                   <div className="col-12">
//                     <div className="headerpic headerpicLeftPad">
//                       <span className="align-baseline-left">
//                         <h3>Let us work together</h3>
//                       </span>
//                       <ul className="list-inline">
//                         <li className="list-inline-item">
//                           {' '}
//                           <i className="fa fa-check" />
//                           &nbsp; Post your wish
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Get matched
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Engage & cooperate
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Seek Intelligece
//                         </li>
//                         <li className="list-inline-item">
//                           <i className="fa fa-check" />
//                           &nbsp; Dashboard
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="caption">
//                 <p />
//                 <h4 className="text-center">
//                   <font color="teal">
//                     <strong>Service Xchange (SX)</strong>
//                   </font>
//                 </h4>
//                 <div className="text-center">
//                   <div className="btn-group btn-trigger">
//                     <Link to="/servicexchange" className="btn btn-lg btn-info">
//                       <strong>Enter & Engage</strong>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-2 col-md-4 col-sm-6">
//               <div className="textspaceTop" />
//               <div className="text-center">
//                 <div>
//                   <Link
//                     to="/baandalibrary"
//                     className="btn btn-outline-primary btn-block"
//                   >
//                     <strong>Browse SX Posts</strong>
//                   </Link>
//                 </div>
//                 <div className="textspaceTop" />

//                 <div>
//                   <Link
//                     to="/baandalibrary"
//                     className="btn btn-outline-primary btn-block"
//                   >
//                     <strong>Info Center</strong>
//                   </Link>
//                 </div>
//                 <div className="textspaceTop" />
//                 <div>
//                   <Link
//                     to="/marketing"
//                     className="btn btn-outline-primary btn-block"
//                   >
//                     <strong>Reach Out</strong>
//                   </Link>
//                 </div>
//                 <div className="textspaceTop" />
//                 <div>
//                   <Link
//                     to="/blockchain"
//                     className="btn btn-outline-primary btn-block"
//                   >
//                     <strong>Smart Contracts</strong>
//                   </Link>
//                 </div>
//                 <div className="textspaceTop" />
//                 <div>
//                   <Link
//                     to="/cooperation"
//                     className="btn btn-outline-primary btn-block"
//                   >
//                     <strong>Cooperations</strong>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footerspace" />
//       </div>
//     );
//   }
// }

// Landing.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(Landing);
