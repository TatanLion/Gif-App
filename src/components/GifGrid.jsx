// COMPONENTS
import { GifItem } from './GifItem'
// HOOKS
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category, limitResults }) => {

    // HOOK
    const { images, isLoading } = useFetchGifs(category, limitResults)

  return (
    <>
        {isLoading && (
            <>
                <h3>{ category }</h3>
                <div className='card-grid'>
                    {images.map( image => (
                        <GifItem key={image.id} {...image} /> // Es la forma en la que pasamos
                    ))}
                </div>
            </>
        )}
        
    </>
  )
    }
