import React from 'react';
import './Button.scss';

const ActionButton = (props)=>{
    return(
        <button className={props.className}>{props.action}</button>
    )
}
export default ActionButton