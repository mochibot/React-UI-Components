import React from 'react';
import './Button.scss';

const ActionButton = (props) => {
  return <div className='action-btn'>{props.action}</div>;
}

export default ActionButton;