import React from 'react';

export const Text = ({ label, input }) => {
  return (
    <div className="mv4 w-100">
      <input
        {...input}
        placeholder={label}
        type="text"
        className="pa2 ba b--black-40 w-100"
      />
    </div>
  );
};

export default Text;
