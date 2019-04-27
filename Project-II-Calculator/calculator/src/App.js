import React,{Component} from "react";
import "./App.scss";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      num1: null,
      operation: null,
  }
    
  }
  clear = () => {
    this.setState({
      total: 0,
      num1: 0,
      num2: 0
    });
  }
  looseJsonParse= (obj)=>{
   return Function('"use strict";return (' + obj + ')')();
  }

  setDisplay= (e)=>{
    //on first click. Set display to number
    //on second click, either '=' or 'operation' or 'number' 
    // set display to number, create new operation, or concantenate 'number'(goes back to 'second click').
  }

  equals= ()=>{
    //if there is an operation to preform, return the total
    //if there is a number to display, return the number to total
  }
  operation= ()=>{
    //preform operation looseJsonParse()
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
                  method={this.state.clear}
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
                  method={this.state.divide}
                />
                <ActionButton
                  action="×"
                  className="btn"
                  method={this.state.multiply}
                />
                <ActionButton
                  action="-"
                  className="btn"
                  method={this.state.subtract}
                />
                <ActionButton
                  action="+"
                  className="btn"
                  method={this.state.add}
                />
                <ActionButton action="=" className="btn" method={this.state.equals} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
