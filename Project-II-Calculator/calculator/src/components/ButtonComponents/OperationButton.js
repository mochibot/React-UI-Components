import React from 'react';
import './Button.scss';

const OperationButton = (props) => {
  return <button className='operation-btn' onClick={props.onClick} data-value={props.value}>{props.value}</button>;
}

export default OperationButton;
