import React from 'react';
import './footer.css';
import favicon from'./images/favicon.ico'

function Footer() {
    return(
        <footer className="footer">
            <div>
                <p>Curso de Desarrollo web online 2018 - Curso de Responsive Design<img src="https://static.platzi.com/static/images/footer/logo.png" alt="platzi" width="80" /> </p>
            </div>
            <div>
                <p>Designed with ❤️ by <a href="https://twitter.com/thespianartist" target="_blank">@thespianartist</a><br/> Developed by <a href="https://twitter.com/peblo_code" target="_blank">@peblo_code</a> and powered by React.js <img src={favicon} className="react-img"></img></p>
            </div>
        </footer>
    )
}

export default Footer;