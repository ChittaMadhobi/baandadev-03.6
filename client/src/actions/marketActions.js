import axios from 'axios';

export const submitSurvey = (values, history) => {
  //console.log('Reached into actions : ' + JSON.stringify(values));
  axios
    .post('/api/marketing/reachout', values)
    .then(res => {
      console.log('res:' + JSON.stringify(res.data));
    })
    .catch(err => console.log('err: ' + JSON.stringify(err.response)));

  return { type: 'submit_survey' };
};
