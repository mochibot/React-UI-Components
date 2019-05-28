import React from 'react';
import './Button.scss';

const NumberButton = (props) => {
  return <div className='number-btn'>{props.number}</div>;
}

export default NumberButton;