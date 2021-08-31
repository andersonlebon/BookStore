import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { name, onChange, value } = props;
  return (<input type="text" placeholder="" name={name} value={value} onChange={onChange} />);
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
