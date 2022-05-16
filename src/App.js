import './App.css';
import dogebeta from './images/dogebeta.png';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Screen from './components/Screen';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () =>{
    if(input){
      setInput(evaluate(input));
    } else{
      alert("Entry values!")
    }
  };

  return (
    <div className="App">
      <div className='baby-doge-container'>
        <img 
        src={dogebeta} 
        className='baby-doge-logo'
        alt='Logo babydoge'
        />
      </div>
      <div className="container-calculator">
        <Screen input={input}/>
        <div className="row">
          <Button driveClick={addInput}>1</Button>
          <Button driveClick={addInput}>2</Button>
          <Button driveClick={addInput}>3</Button>
          <Button driveClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>4</Button>
          <Button driveClick={addInput}>5</Button>
          <Button driveClick={addInput}>6</Button>
          <Button driveClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>7</Button>
          <Button driveClick={addInput}>8</Button>
          <Button driveClick={addInput}>9</Button>
          <Button driveClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button driveClick={calculateResult}>=</Button>
          <Button driveClick={addInput}>0</Button>
          <Button driveClick={addInput}>.</Button>
          <Button driveClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Button driveClick={addInput}>√</Button>
          <Button driveClick={addInput}>%</Button>
          <ButtonClear driveClear={()=> setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
