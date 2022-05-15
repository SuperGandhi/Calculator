import './App.css';
import dogebeta from './images/dogebeta.png'

function App() {
  return (
    <div className="App">
      <div className='baby-doge-contenedor'>
        <img 
        src={dogebeta} 
        className='baby-doge-logo'
        alt='Logo babydoge'
        />
      </div>
    </div>
  );
}

export default App;
