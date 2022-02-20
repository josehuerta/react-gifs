import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handleOnChange=(e)=>{
        const newValue=e.target.value;
        setInputValue(newValue)
        
    }

    const handleOnSubmit=(e)=>{
        // esto es para evitar el refresh del navegador
        // de cuando se hace el submit del form
        e.preventDefault();

        // ya que no pasamos las categorias actuales mediante
        // las props , como podria obtenerlas?

        // de la siguiente manera: 
        // con un callback , es decir en ves de pasar un valor
        // utilizamos una funcion la cual al pasar 
        // esa funcion como argumento a setcategories
        // por las propiedades que tiene con esa funcion 
        // obtenemos el anterior estado / valor que tenia 
        // categories , las recibimos como argumento de una funcion 
        // y posteriormente en esa funcion retornamos los nuevos valores
        // con la nueva categoria
        // es decir colocando una funcion como argumento en una funcion
        // que es obtenida por un usesatet , podemos obtener como argumento
        // de la funcion, el valor actual del correspondiente elemento
        //el cual se obtuvo a la par de la funcion que estamos usando para establecer
        // un valor
        if(inputValue.trim().length>=1){

            setCategories(categories=>[inputValue,...categories])
            setInputValue('')
        }
        
    }

  return (
    <div>
        <form onSubmit={(e)=>handleOnSubmit(e)}>
            <input
                type="text"
                value={inputValue}
                onChange={(e)=>handleOnChange(e)}
            />
        </form>
    </div>
  )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;