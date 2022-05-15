import React from 'react';
import '../css/Button.css';

const Button = (props)=>{
    const isOperator = value =>{
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return(
        <div className={`button-container ${isOperator(props.children)? 'operator': null}`.trimEnd()}
        onClick={() => props.driveClick(props.children)}>
            {props.children}
        </div>
    );
}



export default Button;