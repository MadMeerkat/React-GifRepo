import React, {useEffect, useState} from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    
    // Arreglo de imagenes vacio
    // images es el array
    // setImages para setear valores 
    const [images, setImages] = useState([]);

 

    // [] como Segundo argumento del useEffect es para que no se dispre la peticion constantemente
    // [] Lista de dependecias vacio para que se mande una unica vez
    // [category] si cambia la categoria se vuelve a ejecutar el codigo
    useEffect( () => {
        getGifs( category )
        .then( setImages ); // El then es xq retorna una promesa 
    },[ category ])
    
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                <ol>
                    {
                        // La funcion de flecha sin llaves {} y con () hace un return implicito
                        // Seria como devolver un objeto
                        images.map( imgs => (
                            <GifGridItem
                            key = { imgs.id }
                            // operador spreed manda toda la prop del img de manera independiente
                            {...imgs} 
                            >

                            </GifGridItem>
                        ))
                    }    
                </ol>
            </div>
        </>
    )

}