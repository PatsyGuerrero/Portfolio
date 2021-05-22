import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Photo from './components/Photo';
import Dropbox from './components/Dropbox';
import Navbar from './components/Navbar';


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/> 
      <Experience/>
      <Portfolio/>
      <Education/>
      <Skills/>
      <Contact/>
      <Photo/>
      <Dropbox/>
     
    </div>
  );
}

export default App;
