// Survey Fields

import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  // export default props => {
  //   console.log(props);
  // props has element input and meta. We are interesed in input only
  // hence ... we can use ES6 and extract only 'input'
  //console.log('meta : ' + JSON.stringify(meta));
  console.log('input:' + JSON.stringify(input.name));
  return (
    <div>
      <label>{label}</label>
      <input
        className="form-control form-control-sm"
        placeholder="Enter Campaign Title"
        type="text"
        {...input}
      />
      {/* If touched is true then execute, or show, error */}
      <div className="text-danger small" style={{ marginBottom: '15px' }}>
        {touched && error}
      </div>
    </div>
  );
};
