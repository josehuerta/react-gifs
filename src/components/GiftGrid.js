import React from 'react'
// useeffect permite ejecutar cierto codigo de manera condicional

import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GiftGrid = ({category}) => {
    // const [images,setImages]=useState([])

    // useEffect(()=>{
    //     // nota la funcion que recube como parametro 1 el useeffect no 
    //     // puede ser async 

    //     getGifs(category).then( gifs=>setImages(gifs) );

    //     // como getgifs es async , retorna no la data
    //     // si no una promesa y debemos trabajar esa promesa
    //     // para obtener la data
    // },[category])

    // use efect se compone de una funcion y de un arreglo de dependecias
    // esas dependencias son elementos de nuestro codigo, qu cuando 
    // estos cambien entonces se activara la funcion que contiene 
    // el use effect
    // useeffect se activa la primera vez qe se renderiza el componente
    // y tambien cada que una de las dependencias cambia

    // useEffect(()=>{
    //     getGifs();
    // },[])
    // con el codigo anteriormente comentado indicamos que 
    // getgifs se ejecutara unicamete al renderizar por primera
    // vez el componente

    // usamos useffect por que si no cada que algo cambie en el componente
    // este se renderizara de nuevo , pero pe el componente se compone de
    // 2 elementos , y el elemtno 1 cambia , esto obligara a renderizar
    // de nuevo el componente sin emgargo el elemento 2 no tendria por que 
    // pasar de nuevo por el proceso de renderizacion

    const {data:images,loading}=useFetchGifs(category);
  return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
        <div className='card-grid'>
            {
                images.map(img=>{
                    return <GifGridItem 
                            key={img.id}
                            {...img}
                            // con esta linea pasamos todo los campos de image
                            // como props a gifgriditem
                            />
                })
            }
        
        </div>
    </>
  )
}

export default GiftGrid