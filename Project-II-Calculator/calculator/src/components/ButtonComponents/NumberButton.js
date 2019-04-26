import React from 'react';
import './Button.scss';
const NumberButton =(props) =>{

    return(
        <button className={props.buttonStyle} onClick={(e)=>props.setDisplay(e)}>{props.text}</button>
    );
}
export default NumberButton;