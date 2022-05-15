import React from 'react'
import "../css/ButtonClear.css"



const ButtonClear = (props) => {
  return (
    <div className="button-clear" onClick={props.driveClear}>
        {props.children}
    </div>
  );
}

export default ButtonClear