import React from "react";

export const GifGridItem = ( {title,url} ) => {
// las className en JS es el class de html
    return(
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title }/>
            <p> {title} </p>
        </div>
    )

}