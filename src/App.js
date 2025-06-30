import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Attractions from './components/Attraction';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Attractions/>
      <Gallery/>
      <div className='contact-review-wrapper'>
           <div className='contact-section'>
                    <Contact/>
           </div>
           <div className='review-sections'>
              <ReviewForm/>
             
           </div>
      </div>
      
      
      <Footer/>
    </div>
  );
}

export default App;
