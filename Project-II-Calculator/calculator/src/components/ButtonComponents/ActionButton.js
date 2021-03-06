import React from 'react';
import './Button.scss';

const ActionButton = (props)=>{
    return(
        <button onClick={()=>props.setOperation(props.text)} className={props.className}>{props.action}</button>
    )
}
export default ActionButton