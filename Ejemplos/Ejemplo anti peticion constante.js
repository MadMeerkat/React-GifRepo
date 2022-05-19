import React, {useEffect, useState} from "react";

// UseEffect sirve para que no se llame constatemente a la peticion de gif

export const GifGrid = ({ category }) => {
    
    let [count,setCount] = useState(0);

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=C3zxm1jYmzFBtytfUWXFYE9tHeXHIQ8L&q=charizard&limit=10';
        const resp = await fetch ( url );
        const { data } = await resp.json();

        const gifsData = data.map( img =>{

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium // images? es para asegurar que si no viene la data no use
            }
        })

        console.log(gifsData);
        

        
    }

   
    // [] como Segundo argumento del useEffect es para que no se dispre la peticion constantemente
    // [] Lista de dependecias vacio para que se mande una unica vez
    useEffect( () => {
        getGifs();
    },[])
    
    return (
        <div>
            <h3> { category } </h3>
            <h3> { count } </h3>
            <button  onClick={ () => setCount( count+1 )}></button>
        </div>
    )

}