import React from 'react';
import './Button.scss';

const OperationButton = (props) => {
  return <button className='operation-btn'>{props.operation}</button>;
}

export default OperationButton;
