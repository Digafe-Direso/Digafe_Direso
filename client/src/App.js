import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import MoreAbout from './components/MoreAbout';
import Services from './components/Services';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Skills />
                <RecentWork />
                <Contact />
                <ContactForm/>
              </>
            } />
            <Route path="/MoreAbout" element={<MoreAbout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;