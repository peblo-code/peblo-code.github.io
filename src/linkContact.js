import React from 'react';
import './linkContact.css'

function LinkContact({href, className}) {
    return(
        <>
            <a href={href} className={className} target="_blank"></a>
        </>
    )
}

export default LinkContact;