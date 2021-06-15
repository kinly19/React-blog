
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Self closing tag */}
      <div className="content">
        <Home />
      </div>

    </div>
  );
}

export default App;
