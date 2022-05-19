

   // llamado asyncrono a la API
   export const getGifs = async(category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=C3zxm1jYmzFBtytfUWXFYE9tHeXHIQ8L&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifsData = data.map( img =>{

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // images? es para asegurar que si no viene la data no use
        }
    })

    return gifsData;

    
}


