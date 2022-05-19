// EJEMPLO: Tomar y cambiar valores de inputs
// Agregar nuevos valores a una lista

// CADA VEZ QUE USEMOS useState hay que hacer el import
import React, {useState} from "react";
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
    const [inputValue,setInputValue] = useState(''); //Vacio es undefined, ('') para que no tire ese error 

    // Funcion que cambia el valor del input 
    // e.target.value, toma el valor del campo que se llama el evento
    const handleInputChage = ( e ) => { 
        setInputValue(e.target.value)      
    }

    // Funcion al tocar enter
    // e.preventDefault(); previene el comportamiento de navegacion
    // Valido que no ingrese valores vacios
    const handleEnter = (e) => {
        e.preventDefault();

        if( inputValue.trim().length >  1){
            setCategories( cats => [inputValue,...cats]);
            setInputValue('');
        }

        
    }
    return( 
            

            <form onSubmit={ handleEnter }>
            <h2>{ inputValue }</h2>
            <input  type='text'
                    placeholder="texto"
                    value={ inputValue }
                    onChange = { handleInputChage}/>
            </form>
  
    );
}


// Esto es para que cuando se use el componente <AddCategory/> vaya con un argumento
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}