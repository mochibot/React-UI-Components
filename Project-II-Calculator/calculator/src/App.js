import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import OperationButton from './components/ButtonComponents/OperationButton'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    }
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.operations = ['÷', '×', '-', '+', '='];

    this.handleClick = this.handleClick.bind(this);
    this.clearClick = this.clearClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.getAttribute('data-value');
    this.setState({
      total: value
    })
  }

  clearClick(event) {
    this.setState({
      total: 0
    })
  }
  
  render() {
    return (
      <div className='calculator-container'>
        <CalculatorDisplay total={this.state.total}/>
        <div className='btn-container'>
          <div className='btn-left'>
            <ActionButton action={'clear'} onClick={this.clearClick} />
            <div className ='number-pad'>
              {this.numbers.map(item => <NumberButton value={item} key={item} onClick={this.handleClick} />)}
            </div>
            <ActionButton action={0} onClick={this.clearClick}/>
          </div>
          <div className='btn-right'>
            {this.operations.map(item => <OperationButton operation={item} key={item} />)}
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

