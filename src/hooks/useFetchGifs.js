import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";
// los custom hooks funcionan como si fueran
// functional components
// pueden tener efectos , usar redux , contextos, etc
export const useFetchGifs=(category)=> {
   const [state,setState]=useState({
       data:[],
       loading:true
   })
//    en esta caso state es un objeto 

   useEffect(()=>{
        getGifs(category).then(imgs=>{

            setTimeout(() => {
                setState({
                    data:imgs,
                    loading:false
                })
            }, 1000);
            
        })
   },[category])
   return state
}
// los custom hooks surven para evitar que un componente
// este bastante cargado , recordar que lo ideal es que 
// el componente este en su forma atomica