import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    //data:imgs es para cambiar el nombre
    const {data:imgs,loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="card animate__animated animate__fadeIn">Cargando...</p>}
             <div className="card-grid">
                <ol>
                    {
                        // La funcion de flecha sin llaves {} y con () hace un return implicito
                        // Seria como devolver un objeto
                        imgs.map( imgs => (
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