import axios from 'axios';
//import setAuthToken from '../utils/setAuthToken';
//import jwt_decode from 'jwt-decode';

//export const handleToken = token => async dispatch => {
export const handleToken = token => {
  console.log('Reached in the handleToken in financeActions');
  //const res = await axios.post('/api/finance/stripe', token);

  let chargeBody = {
    amount: 700,
    token: token
  };

  axios
    .post('/api/finance/stripe', chargeBody)
    .then(res => console.log('res : ' + res.data))
    .catch(err => console.log('err : ' + JSON.stringify(err.response)));

  // axios
  //   .post('/api/finance/stripe', token)
  //   .then(res => console.log('res : ' + res.data))
  //   .catch(err => console.log('err : ' + err.response));

  // In action handler call ... we would do the following in
  // const res = await axios.post('/api/finance/stripe', token);
  // dispatch({ type: FETCH_USER, payload: res.data});

  // We would need to dispatch to update the credits for the payment made
  // Not sure, what needs to be setup at this point of time.
  // Reaponse will return res.data
  // dispatch ({ type: SOMETHING_IN_TYPES.JS, payload: res.data]})
};
