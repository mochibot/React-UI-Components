import React from 'react';
import './Display.scss';

const CalculatorDisplay = (props) => {
  return (
    <div className='display'>{props.total}</div>
  )
}

export default CalculatorDisplay;