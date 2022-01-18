import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { Section } from './Components/Section';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Header></Header>
     <Section></Section>
     <div className='test'></div>
    </div>
  );
}

export default App;
