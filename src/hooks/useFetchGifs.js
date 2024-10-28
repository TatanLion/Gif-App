import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {
    
    // Guardar las imagenes en un estado
    const [ images, setImages ] = useState([])
    // Estado loading para cargar las imágenes
    const [ isLoading, setIsLoading ] = useState(true)

    // Funcion para obtener las imagenes de la API y guardarlas en el state
    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(true)
    }

    // useEffect que se dispara cuando se pinta el componente
    useEffect(() => {
        getImages()
    }, [category])

    return {
        images,
        isLoading
    }

}
