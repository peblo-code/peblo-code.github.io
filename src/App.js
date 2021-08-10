import logo from './logo.svg';
import './globals.css';
import Head from './head';
import Header from './header';
import Hero from './hero';
import Portafolio from './portafolio';
import Eventos from './eventos';

function App() {
  return (
  <>
    <Head />
    <Header />
    <Hero />
    <Portafolio text="Portafolio (Proyectos Destacados)"/>
    <Eventos text="Más sobre mi experiencia" />

  </>
  );
}

export default App;
