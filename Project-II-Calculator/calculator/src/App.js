import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import OperationButton from './components/ButtonComponents/OperationButton'

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ['÷', '×', '-', '+', '='];

  return (
    <div className='calculator-container'>
      {/* commenting out starter code
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      */}
      <CalculatorDisplay />
      <div className='btn-container'>
        <div className='btn-left'>
          <ActionButton action={'clear'} />
          <div className ='number-pad'>
            {numbers.map(item => <NumberButton number={item}/>)}
          </div>
          <ActionButton action={0} />
        </div>
        <div className='btn-right'>
          {operations.map(item => <OperationButton operation={item} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
