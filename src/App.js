import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Attractions from './components/Attraction';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Attractions/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
