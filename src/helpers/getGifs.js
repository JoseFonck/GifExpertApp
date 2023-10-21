export const getGif = async (category) => {
    const apiKey = 'kDDuPLCyYWldB9EfAFpIlXxIHWwqYw2O';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map(({id, title, images})=>({
        id,
        title,
        img: images.downsized_medium.url
    }))
    return gifs    // console.log(gifs)
}