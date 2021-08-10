import React from 'react';
import './hero.css'

function Hero () {
    return (
    <section className="hero">
        <div className="container">
            <h1>
                Hola! Soy <strong>Pablo Benedix</strong> <br/> Desarrollador <strong> Front-End</strong> y <br/>Estudiante de <strong>Platzi</strong>
            </h1>
            <img className="hero-image" src="https://elloplur.sirv.com/imagesPortfolio/dav.jpg" width="300" height="300"  alt="imagen principal del sitio" />
        </div>
    </section>
    )
}

export default Hero;