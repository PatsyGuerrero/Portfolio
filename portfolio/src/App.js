import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Photo from './components/Photo';
import Dropbox from './components/Dropbox';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Photo/>
      <Home/>
      <About/> 
      <Experience/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Dropbox/>
     
    </div>
  );
}

export default App;
