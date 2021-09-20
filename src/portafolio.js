import React from 'react';
import ArticlePortafolio from './articlePortafolio'
import './portafolio.css';

var articlePortafolioList = [
    {
        id: 1,
        project_title: 'Instagram-Model', 
        project_name: 'CSS Grid Layout', 
        project_date: '03/05/2019', 
        project_url: 'https://peblo-code.github.io/Instragram-model/', 
        project_description: 'Diseño web de Instagram.', 
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/instagram-project.png', 
        project_image_descripion: 'proyecto del curso de CSS Grid Layout'
    },
    {
        id: 2,
        project_title: 'Pinterest-Model', 
        project_name: 'CSS Grid Layout', 
        project_date: '03/05/2019', 
        project_url: 'https://peblo-code.github.io/Pinterest-model/', 
        project_description: 'Diseño web de Pinterest.', 
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/pinterest-project.png', 
        project_image_descripion: 'proyecto del curso de CSS Grid Layout'
    },
    {
        id: 3,
        project_title: 'Reflect', 
        project_name: 'Open Source Template', 
        project_date: '29/07/2019', 
        project_url: 'https://peblo-code.github.io/Reflect/', 
        project_description: 'Este es un template de código abierto diseñado para cualquier tipo de uso.', 
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/reflect.png', 
        project_image_descripion: 'Layout Open Source'
    },
    {
        id: 4,
        project_title: 'Clon de Google',
        project_name: 'Autodidact Project',
        project_date: '08/2020',
        project_url: 'https://peblo-code.github.io/Clon-de-Google/',
        project_description: 'Utilizo mis conocimientos en CSS para intentar clonar Google.',
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/imagen_2021-09-20_105758.png',
        project_image_descripion: 'Google Clon Image Project'
    }
]

function Portafolio(props) {
    return (
        <section id="portafolio" className="portfolio">
            <div className="container">
                <div className="info">
                    {props.children}
                    <h2 className="first-title">{props.text}</h2>
                </div>
                {
                    articlePortafolioList.map((articlePortafolioList) => <ArticlePortafolio key={articlePortafolioList.id} {...articlePortafolioList} />)
                }
            </div>
        </section>
    )
}

export default Portafolio;