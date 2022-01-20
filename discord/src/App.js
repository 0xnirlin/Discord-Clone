import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { Section } from './Components/Section';
import { Endsec } from './Components/Endsec';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Header></Header>
     <Section></Section>
      <Endsec></Endsec>
      <Footer></Footer>
     <div className='test'></div>
    </div>
  );
}

export default App;
