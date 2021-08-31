import React from 'react';

const Input = (props) => {
    const {name, noChange, value} = props;
    return ( <input type="text" placeholder="" name={ name } value={value} onChange={onchange} /> );
}

export default Input;