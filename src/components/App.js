import { PureComponent } from 'react';
import Routes from '../Routes';
import '../styles/App.css';
import logo from '../assets/amazon.png';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" className="my-3" />
        <Routes />
      </div>
    );
  }
}

export default App;
