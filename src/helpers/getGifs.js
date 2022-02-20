export const getGifs=async(category)=>{
    const url='https://api.giphy.com/v1/gifs/search';
    const apiKey='4eGkzbejoCQLF7aEnGpTc03GsGS2Pw1e';
    const limitElements=5;
    const fullURL=`${url}?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limitElements}`
    // encodeuri , es para que si una categoria tiene espacios
    // pase de esto rocky balboa
    // a esto rocky%20balboa
    const response=await fetch(fullURL);
    const data=await response.json();

    // como el json que contiene la informacion se compone de los sig campos
    // data,meta,paginas
    // usaremos destructuracion para obtener data
    const {data:dataImages}=data;

    const gifs= dataImages.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
            // si la imagen si contiene imagenes ?
            // entonces si vamos al campo downsize_medium
            // y de ahi su campo url
        }
    })
    return gifs;


}