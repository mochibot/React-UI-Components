import React from 'react';
import './App.scss';
import math from 'mathjs'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import OperationButton from './components/ButtonComponents/OperationButton'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expression: ''
    }
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.operations = ['÷', '×', '-', '+', '='];

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.calculate = this.calculate.bind(this);
  }


  handleClick(event) {
    let value = event.target.getAttribute('data-value')
    if (value === '÷') {
      this.setState({
        expression: this.state.expression + '/'
      })
    } else if (value === '×') {
      this.setState({
        expression: this.state.expression + '*'
      })
    } else if (value === '=') {
      this.calculate();
    } else {
      this.setState({
        expression: this.state.expression + value
      })
    }
  }

  calculate() {
    this.setState({
      expression: math.eval(this.state.expression)
    })
  }

  reset() {
    this.setState({
      expression: ''
    })
  }
  
  render() {
    return (
      <div className='calculator-container'>
        <CalculatorDisplay total={this.state.expression}/>
        <div className='btn-container'>
          <div className='btn-left'>
            <ActionButton value={'clear'} onClick={this.reset} />
            <div className ='number-pad'>
              {this.numbers.map(item => <NumberButton value={item} key={item} onClick={this.handleClick} />)}
            </div>
            <ActionButton value={0} onClick={this.handleClick}/>
          </div>
          <div className='btn-right'>
            {this.operations.map(item => <OperationButton value={item} key={item} onClick={this.handleClick}/>)}
          </div>
        </div>
      </div>
    );
  };
}


/* 
commenting out MVP code to work on stretch

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ['÷', '×', '-', '+', '='];

  return (
    <div className='calculator-container'>
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

*/

export default App;

