import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Capabilities from './components/Capabilities.js';
import Process from './components/Process.js';
import Clients from './components/Clients.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
