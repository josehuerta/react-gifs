import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";




export const GifExpertApp=()=>{
    const initialCategories=['elmo']

    const [categories,setCategories]=useState(initialCategories)

    // const handleAddCategory=()=>{
    //     const newListCategories=[...categories,'categoria4']
    //     setCategories(newListCategories)
    // otra manera de hacer lo mismo de las lineas de arriba pero con
    // una sola linea seria:
    // setCategories(cat=>[...cat,'categoria4'])
    // al pasar un callback a una funcion obtenida de usestate
    // ese callback recibe como argumento el valor actual    
    // del la constante que se creo a la par que la funcion 
    // con el usestate
    // }
    return(
        <>
            <h2>Gif expert app</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            {/* <button onClick={()=>handleAddCategory()}>+ Add categorie</button> */}
            <ol>
                {/* map por default recibe 2 argumentos
                1 el elemento de categories que esta mapeando en ese momento
                2 un elemento indice , el cual esta asociado al orden en que va
                este indice comienza en 0 */}
                {categories.map((category,index)=>{
                    // siempre debemos agregar un key para que react sepa 
                    // el key asociado al lemento que esta iterando
                    // esta key sirve para que react sepa cual es el elemtno 
                    // esta iterando, y si algo en ese elemento cambia
                    // se basara en ese key para hacer la nueva renderizacion
                    // con los cambios
                    // por esa razon no es recomendable usar el index como key
                    // ya que este es muy volatil y como tal no hace referencia
                    // de manera directa a un elemento  

                    // ojo los keys deben ser unicos ya que esos 
                    // los usa de referencia react para gestionar el comportamiento
                    // de cada elemento
                    // return <li key={category}>{category}</li>
                    return <GiftGrid key={category} category={category} />
                })}
            </ol>
        </>
    )
}

// shortcut para crear un componente =>rafc

// estructura de archivos y directorios en react
// https://es.reactjs.org/docs/faq-structure.html
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76


// arrow function
// si en una arrow funcion queremos retornar algo peor ese algo
// esta definido por varias lineas , pe un una etiqueta input
// pero a esa etiqueta le pondremos varios valores a sus campos
// como value , class , etc
// podemos encerra ese elemento a retornar con parentesis
// y asi podemos describir ese elemento a retornar con varias lineas