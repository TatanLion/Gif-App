export const getGifs = async (category) => {
    const limit = category.numberSearch || 50;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=P4ZGt93esbx7l1uUPdHsqcfU0F2VaXBR&q=${category.valueSearch}&limit=${limit}`
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