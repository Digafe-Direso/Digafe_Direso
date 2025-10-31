
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Hero from './components/Hero';
import RecentWork from './components/RecentWork';
import Skills from './components/Skills';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
     <Header />
      <Hero />
      <About />
      <Services />
      <RecentWork />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
