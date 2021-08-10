import React from 'react';
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <figure className="logo">
                    <img src="https://elloplur.sirv.com/imagesPortfolio/logo.png" alt="Logo de http://pablobenedix.com" height="50" />
                </figure>
                <nav className="menu">
                    <ol>
                        <li>
                            <a className="link" href="#portafolio">Portafolio</a>
                        </li>
                        <li>
                            <a className="link" href="#eventos">Experiencia</a>
                        </li>
                        <li>
                            <a className="link" href="#contacto">Trabajemos juntos</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </header>
    )
}
export default Header;