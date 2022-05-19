import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGread";

export const GifExpertApp = () =>{
   const [categories, setCategories] = useState (['']);



    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr></hr>
            
            <ol>
                {
                    // map para recorrer un array array.map
                    // map recibe 2 parametros, el array y que indice tiene
                    categories.map( category =>(
                        <GifGrid 
                        key = { category }
                        category={ category }>  
                        </GifGrid>
                    ))
                }
            </ol>

        </> 

    )

}