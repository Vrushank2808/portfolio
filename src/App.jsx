import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import BackToTop from './components/BackToTop';
import './components/BackToTop.css'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <Works />
          <Resume />
          <Skills />
          <Testimonials />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
