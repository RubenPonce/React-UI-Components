import React, { Component } from "react";
import "./App.scss";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      num1: null,
      operation: null,
      operationWasPressed: false,
    }

  }
  clear = () => {
    this.setState({
      total: '0',
      num1: '0',
      num2: '0'
    });
  }
  looseJsonParse = (obj) => {
    return Function('"use strict";return (' + obj + ')')();
  }

  setDisplay = (e) => {
    //on first click. Set display to number
    //on second click, either '=' or 'operation' or 'number' 
    // set display to number, create new operation, or concantenate 'number'(goes back to 'second click').
    const numberPressed = e.target.textContent;
    console.log(this.looseJsonParse('5+5'))
    //first case
    if (this.state.total === '0') {
      this.setState({
        total: numberPressed
      })
    } else if (this.state.total !== '0' && !this.state.operationWasPressed) { //second case 
      this.setState((prevState) => ({
        total: prevState.total + numberPressed
      }))
    }
    if (this.state.operationWasPressed) {//when operation is pressed, reset operation to false and compute operation
      this.setState(prevState => ({
        operationWasPressed: false,
        total: prevState.total + this.state.operation + numberPressed
      }))

    }
  }
  clear = () => {
    this.setState({
      total: '0',
      num1: null,
      operation: null,
      operationWasPressed: false,
    })
  }

  equals = () => {
    //if there is an operation to preform, return the total
    //if there is a number to display, return the number to total
    this.setState({
      total: this.looseJsonParse(this.state.total).toString()
    })
  }
  setOperation = (text) => {
    const operation = text;
    console.log(operation)
    this.setState({
      operation: operation,
      operationWasPressed: true
    })
  }

  render() {
    return (
      <div>
        <h3 className="big-header">Ruben's <span role="img" aria-label="fire emoji">🔥</span> Calculator </h3>
        <div className="app">
          <div className="calculator-container">
            <CalculatorDisplay total={this.state.total} />
            <div className="button-container">
              <div className="left">
                <ActionButton
                  action="clear"
                  className="wide-btn"
                  setOperation={this.clear}
                  text="0"
                />
                <div className="numbers">
                  <div className="row">
                    <NumberButton text="7" setDisplay={this.setDisplay} />
                    <NumberButton text="8" setDisplay={this.setDisplay} />
                    <NumberButton text="9" setDisplay={this.setDisplay} />
                  </div>
                  <div className="row">
                    <NumberButton text="4" setDisplay={this.setDisplay} />
                    <NumberButton text="5" setDisplay={this.setDisplay} />
                    <NumberButton text="6" setDisplay={this.setDisplay} />
                  </div>
                  <div className="row">
                    <NumberButton text="1" setDisplay={this.setDisplay} />
                    <NumberButton text="2" setDisplay={this.setDisplay} />
                    <NumberButton text="3" setDisplay={this.setDisplay} />
                  </div>
                </div>
                <NumberButton
                  text="0"
                  buttonStyle="wide-btn"
                  setDisplay={this.setDisplay}

                />
              </div>
              <div className="right">
                <ActionButton
                  action="÷"
                  className="btn"
                  setOperation={this.setOperation}
                  text="/"
                />
                <ActionButton
                  action="×"
                  className="btn"
                  setOperation={this.setOperation}
                  text="*"
                />
                <ActionButton
                  action="-"
                  className="btn"
                  setOperation={this.setOperation}
                  text="-"
                />
                <ActionButton
                  action="+"
                  className="btn"
                  setOperation={this.setOperation}
                  text="+"
                />
                <ActionButton action="=" className="btn" text="=" setOperation={this.equals} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
