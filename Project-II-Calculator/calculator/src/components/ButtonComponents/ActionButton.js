import React from 'react';
import './Button.scss';

const ActionButton = (props) => {
  return <button className='action-btn' onClick={props.onClick}>{props.action}</button>;
}

export default ActionButton;