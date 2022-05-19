// HOOKS CUSTOMED
// Los hooks empiezan con use
import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) =>{
    console.log('aca'+category)
    const [state, setState] = useState ({
        data: [],
        loading: true
    });

    // [] como Segundo argumento del useEffect es para que no se dispre la peticion constantemente
    // [] Lista de dependecias vacio para que se mande una unica vez
    // [category] si cambia la categoria se vuelve a ejecutar el codigo
    useEffect( () => {

        getGifs(category? category : 'xmas')
        .then( imgs => {
            
                setState ({
                    data: imgs,
                    loading: false
                });
            
        }); // El then es xq retorna una promesa 
    },[category])

    return state; // el state es data:[], loading:true;

}

