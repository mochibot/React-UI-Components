import React from 'react';
import './Button.scss';

const NumberButton = (props) => {
  return <button className='number-btn' onClick={props.onClick} data-value={props.value}>{props.value}</button>;
}

export default NumberButton;