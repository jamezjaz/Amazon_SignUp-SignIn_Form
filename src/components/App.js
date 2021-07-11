import Routes from '../Routes';
import '../styles/App.css';
import logo from '../assets/amazon.png';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="my-3" />
      <Routes />
    </div>
  );
}

export default App;
