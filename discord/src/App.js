import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Header></Header>
     <div className='test'></div>
    </div>
  );
}

export default App;
