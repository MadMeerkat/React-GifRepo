// ACA RECORREMOS Y SETEMSOS VALORES A UNA NUEVA LISTA
// MAP PARA RECORRER
// USE STATE para setear 
// [...nombreLista,nuevoValor] copio la lista nueva y agrego nuevo valor 

import React, { useState } from "react";


export const GifExpertApp = () =>{
   const [categories, setCategories] = useState (['one','two','three']);

   const handleAdd = () =>{
       // setCategories setea un nuevo valor
       // [...array ,nuevo valor] agrego un nuevo valor
       setCategories([...categories,'four']);
   }

    return(
        <>
            <h2>Gif Expert App</h2>
            <hr></hr>
            
            <ol>
                {
                    // map para recorrer un array array.map
                    // map recibe 2 parametros, el array y que indice tiene
                    categories.map( (category,i) =>{
                        return <li key={category}> { category } </li>
                    })
                }
            </ol>

            <button onClick={ handleAdd }>Add</button>
        </> 

    )

}