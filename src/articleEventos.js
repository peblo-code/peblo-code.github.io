import React from 'react';
import './articleEventos.css'

function ArticleEventos({url_image, event_title, event_description, event_url}) {
    return(
        <article className="event">
            <figure className="event-image">
                <img src={url_image}/>
            </figure>
            <div className="event-detail">
                <h3 className="event-title">{event_title}</h3>
                <p className="event-description">{event_description}</p>
                <a className="event-url" href={event_url} target="_blank">Ver Diploma</a>
            </div>
        </article>
    )

}
export default ArticleEventos;