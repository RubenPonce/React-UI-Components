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
    operation:null,
    clear: ()=>{
      this.setState({
        total: 0,
        num1: 0,
      });
      
    },
    setDisplay:(e)=>{
        if(this.state.total===0){
          this.setState({
            total: parseInt(e.target.textContent),
            num1: parseInt(e.target.textContent),
          })
        } else{
          this.setState({
            total: parseInt(e.target.textContent+this.state.num1)
          })
        }
    
        if(this.state.operation=="add"){
          this.setState({
            total:parseInt( e.target.textContent)+this.state.num1,
            num1:parseInt( e.target.textContent)+this.state.num1
          })
        } else if(this.state.operation=="subtract"){
          this.setState({
            total:this.state.num1-parseInt( e.target.textContent),
            num1:this.state.num1 -parseInt( e.target.textContent)
          })
        } else if(this.state.operation=="divide"){
          this.setState({
            total:this.state.num1/parseFloat( e.target.textContent),
            num1:this.state.num1/parseFloat( e.target.textContent)
          })
        } else if(this.state.operation=="multiply"){
          this.setState({
            total:this.state.num1*parseFloat( e.target.textContent),
            num1:this.state.num1*parseFloat( e.target.textContent)
          })
        } 
      
      
      
    },
    
    
    add: () => {
      this.setState({
        operation: "add",
      });
      
    },
    subtract: () => {
      this.setState({
        operation: "subtract"
      })
    },



    divide: ()=>{
      this.setState({
        operation: "divide",
      });
    },

    multiply: (e)=>{
      this.setState({
        operation: "multiply",

      });
      
    },
 
   
 
    // subtract: (e)=>{
    //   this.setState({
    //     operation: "subtract",
    //     total: e.target.textContent,
    //     num1: parseInt(e.target.textContent)
    //   });
    // },



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
