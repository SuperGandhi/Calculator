import './App.css';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Screen from './components/Screen';
import dogebeta from './images/dogebeta.png'

function App() {
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
        <Screen/>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>√</Button>
          <Button>%</Button>
          <Button>x²</Button>
          <ButtonClear>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
