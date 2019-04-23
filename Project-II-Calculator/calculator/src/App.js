import React from 'react';
import './App.scss';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <div className="app">
        <CalculatorDisplay />
        <div className="button-container">
          <div className="left">
            <ActionButton action="clear" className="wide-btn" />
            <div className="numbers">
              <div className="row">
                <NumberButton text="7" />
                <NumberButton text="8" />
                <NumberButton text="9" />
              </div>
              <div className="row">
                <NumberButton text="4" />
                <NumberButton text="5" />
                <NumberButton text="6" />
              </div>
              <div className="row">
                <NumberButton text="1" />
                <NumberButton text="2" />
                <NumberButton text="3" />
              </div>
            </div>
            <ActionButton action="0" className="wide-btn" />
          </div>
          <div className="right">
            <ActionButton action="divide" className="btn" />
            <ActionButton action="multiply" className="btn" />
            <ActionButton action="subtract" className="btn" />
            <ActionButton action="add" className="btn" />
            <ActionButton action="=" className="btn" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default App;
