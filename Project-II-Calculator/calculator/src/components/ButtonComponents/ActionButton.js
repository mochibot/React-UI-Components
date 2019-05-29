import React from 'react';
import './Button.scss';

const ActionButton = (props) => {
  return <button className='action-btn' onClick={props.onClick} data-value={props.value}>{props.value}</button>;
}

export default ActionButton;