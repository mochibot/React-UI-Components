import React from 'react';
import './Button.scss';

const OperationButton = (props) => {
  return <div className='operation-btn'>{props.operation}</div>;
}

export default OperationButton;
