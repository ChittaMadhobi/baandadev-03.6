import React from 'react';

export default ({ input, meta: { error, touched } }) => {
  // export default props => {
  //   console.log('props.meta:' + JSON.stringify(props.meta.error));
  let ret_field = '';

  if (input.name === 'title') {
    ret_field = (
      <div>
        <input
          className="form-control font-size-xsm"
          placeholder="Campaign Title"
          {...input}
        />
        <div className="text-danger font-size-xsm">{touched && error}</div>
      </div>
    );
  }

  if (input.name === 'reachoutType') {
    ret_field = (
      <div>
        <input
          className="form-control form-control-xsm"
          placeholder="Reachout type"
          {...input}
        />

        <div className="text-danger font-size-xsm">{touched && error}</div>
      </div>
    );
  }

  if (input.name === 'subject') {
    ret_field = (
      <div>
        <input
          className="form-control font-size-xsm"
          placeholder="Campaing Subject"
          {...input}
        />
        <div className="text-danger font-size-xsm">{touched && error}</div>
      </div>
    );
  }

  if (input.name === 'recipient') {
    ret_field = (
      <div>
        <input
          className="form-control font-size-xsm"
          placeholder="Recipients - name,email; name,email or email; email ..."
          {...input}
        />
        <div className="text-danger font-size-xsm">{touched && error}</div>
      </div>
    );
  }

  return ret_field;
};
