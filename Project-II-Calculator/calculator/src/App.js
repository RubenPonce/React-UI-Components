import React from 'react';
import './App.scss';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
class App extends React.Component {
constructor(props){
  super(props);

  this.state= {
    total:0,
    num1:null,
    num2: null,
    operation:null,
    clear: ()=>{
      this.setState({
        total: 0
      });
      
    },
    setDisplay:(e)=>{
      if(this.state.total!="0"){
        this.setState({
        
          total: this.state.total+e.target.textContent
        });
      }
      else{
        this.setState({
          total: e.target.textContent
        });
      }
      
      
    },
    setNum1:(e)=>{
      this.setState({
        num1: e
      })
    },
    setNum2:(e)=>{
      this.setState({
        num1: e
      })
    },
    

    divide: (e)=>{
      this.setState({
        operation: "divide",
        total: e.target.textContent,
        num1: parseInt(e.target.textContent)
      });
    },

    multiply: (e)=>{
      this.setState({
        operation: "multiply",
        total: e.target.textContent,
        num1: parseInt(e.target.textContent)
      });
      
    },
 
    add: (e)=>{
      console.log(e)
      console.log(this.state.operation)
      console.log(this.state.num1, this.state.num2)
      if(this.state.operation===null){
      this.setState({
        operation: "add",
        num1:e.target.textContent,
        total: ""
      })
    }
    else{
      this.setState({
        num2:e.target.textContent,
        total: (parseInt(this.state.num1)+parseInt(this.state.num2)).toString()
      })
    }
    },
 
    subtract: (e)=>{
      this.setState({
        operation: "subtract",
        total: e.target.textContent,
        num1: parseInt(e.target.textContent)
      });
    },



    }
}
render(){

  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <div className="app">
      <div className="calculator-container">
      <CalculatorDisplay total={this.state.total}/>
        <div className="button-container">
        
          <div className="left">
            <ActionButton action="clear" className="wide-btn" method={this.state.clear}/>
            <div className="numbers">
              <div className="row">
                <NumberButton text="7" setDisplay={this.state.setDisplay}/>
                <NumberButton text="8" setDisplay={this.state.setDisplay} />
                <NumberButton text="9" setDisplay={this.state.setDisplay}/>
              </div>
              <div className="row">
                <NumberButton text="4" setDisplay={this.state.setDisplay}/>
                <NumberButton text="5" setDisplay={this.state.setDisplay}/>
                <NumberButton text="6" setDisplay={this.state.setDisplay}/>
              </div>
              <div className="row">
                <NumberButton text="1" setDisplay={this.state.setDisplay}/>
                <NumberButton text="2" setDisplay={this.state.setDisplay}/>
                <NumberButton text="3" setDisplay={this.state.setDisplay}/>
              </div>
            </div>
            <ActionButton action="0" className="wide-btn" setDisplay={this.state.setDisplay}/>
          </div>
          <div className="right">
            <ActionButton action="÷" className="btn" method={this.state.divide}/>
            <ActionButton action="×" className="btn" method={this.state.multiply}/>
            <ActionButton action="-" className="btn" method={this.state.subtract}/>
            <ActionButton action="+" className="btn" method={this.state.add}/>
            <ActionButton action="=" className="btn" />
          </div>

        </div>
      </div>
      </div>

    </div>
  );
}
;
}

export default App;
