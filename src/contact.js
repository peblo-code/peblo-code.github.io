import React from 'react';
import './contact.css';
import LinkContact from './linkContact';

var contactLinksList = [
    {
        href: "https://twitter.com/peblo_code",
        className: "icon-twitter",
    },
    {
        href: "https://facebook.com/pablovilmar.benedixcanete",
        className: "icon-facebook",
    },
    {
        href: "https://github.com/ZackSten",
        className: "icon-github",
    },
    {
        href: "https://instagram.com/peblo_code",
        className: "icon-instagram",
    }
]

function Contact() {
    return (
        <section id="contacto" className="contact">
            <div className="container">
                <div className="social">
                    { contactLinksList.map((contactLinksList) => <LinkContact key={contactLinksList.href} {...contactLinksList} />) }
                </div>
            </div>
        </section>
    );
}

export default Contact