import React from 'react';

const InputField = ({input, type, meta: { error } }) => (
  <div className="pt-input-group pt-large">
    <span className="pt-icon pt-icon-search"></span>
    <input 
      {...input}
      type="text"
      name="url"
      className="pt-input" 
      placeholder="Enter a URL" />
    <button className="pt-button pt-minimal pt-intent-primary pt-icon-arrow-right" type="submit" ></button>
  </div>
);

export default InputField;
