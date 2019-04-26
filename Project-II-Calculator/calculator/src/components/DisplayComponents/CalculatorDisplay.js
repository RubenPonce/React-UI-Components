import React from 'react';
import './Display.scss';


const CalculatorDisplay= (props)=>{
    console.log(props)
    return(
        <div className="display">
            <h1>{props.total}</h1>
        </div>
    )
}
export default CalculatorDisplay;