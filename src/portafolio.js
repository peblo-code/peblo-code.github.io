import React from 'react';
import ArticlePortafolio from './articlePortafolio'
import './portafolio.css';

var articlePortafolioList = [
    {
        id: 1,
        project_title: 'Benedix Automotores', 
        project_name: 'HTML y CSS', 
        project_date: '07/04/2019', 
        project_url: 'https://zacksten.github.io/Automors-Benedix/', 
        project_description: 'Página donde se puede apreciar los vehículos en venta de Benedix Automores.', 
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/benedix-automores.png', 
        project_image_descripion: 'proyecto del curso de GitHub'
    },
    {
        id: 2,
        project_title: 'Instagram-Model', 
        project_name: 'CSS Grid Layout', 
        project_date: '03/05/2019', 
        project_url: 'https://zacksten.github.io/Instragram-model/', 
        project_description: 'Diseño web de Instagram.', 
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/instagram-project.png', 
        project_image_descripion: 'proyecto del curso de CSS Grid Layout'
    },
    {
        id: 3,
        project_title: 'Pinterest-Model', 
        project_name: 'CSS Grid Layout', 
        project_date: '03/05/2019', 
        project_url: 'https://zacksten.github.io/Pinterest-model/', 
        project_description: 'Diseño web de Pinterest.', 
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/pinterest-project.png', 
        project_image_descripion: 'proyecto del curso de CSS Grid Layout'
    },
    {
        id: 4,
        project_title: 'Reflect', 
        project_name: 'Open Source Template', 
        project_date: '29/07/2019', 
        project_url: 'https://zacksten.github.io/Reflect/', 
        project_description: 'Este es un template de código abierto diseñado para cualquier tipo de uso.', 
        project_image: 'https://elloplur.sirv.com/imagesPortfolio/reflect.png', 
        project_image_descripion: 'Layout Open Source'
    },
]

function Portafolio(props) {
    return (
        <section id="portafolio" className="portfolio">
            <div className="container">
                <h2>{props.text}</h2>
                {
                    articlePortafolioList.map((articlePortafolioList) => <ArticlePortafolio key={articlePortafolioList.id} {...articlePortafolioList} />)
                }
            </div>
        </section>
    )
}

export default Portafolio;