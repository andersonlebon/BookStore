import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    name, onChange, value, placeholder,
  } = props;
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default Input;
