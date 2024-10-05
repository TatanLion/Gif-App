export const getGifs = async (category, limitResults) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=P4ZGt93esbx7l1uUPdHsqcfU0F2VaXBR&q=${category}&limit=${limitResults}`
    const resp = await fetch(url)
    const { data } = await resp.json()
    // console.log(data);
    // return
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    // console.log(gifs);
    return gifs;
}