import './App.css';
import Button from './components/Button';
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
        <div className="row">
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
