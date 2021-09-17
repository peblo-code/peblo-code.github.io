import React, { useState,useEffect } from 'react';
import './globals.css';
import Head from './head';
import Header from './header';
import Hero from './hero';
import Switch from './switch';
import Portafolio from './portafolio';
import Eventos from './eventos';
import Contact from './contact';
import Footer from './footer';

function App() {
  //logica de DarkMode
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'
 
  
  function changeMedia(mq) {
    console.log(mq)
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(()=> {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener("change", changeMedia);
      setDarkMode(mq.matches);
      setChecked(mq.matches);
  },[])


  //render
  return (
  <main className={mainClass}>
    <Head />
    <Header />
    <Hero />
    <Portafolio text="Portafolio (Proyectos Destacados)" >
      <Switch 
              setDarkMode={setDarkMode} 
              checked={checked} 
              setChecked={setChecked}
      />
    </Portafolio>
    <Eventos text="Más sobre mi experiencia" />
    <Contact />
    <Footer />
  </main>
  );
}

export default App;
