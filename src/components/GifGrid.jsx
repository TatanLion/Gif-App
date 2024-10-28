// COMPONENTS
import { GifItem } from './GifItem'
// HOOKS
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    // HOOK
    const { images, isLoading } = useFetchGifs(category)

  return (
    <>
        {isLoading && (
            <>
                <h3>{ category.valueSearch }</h3>
                <div className='card-grid'>
                    {images.map( (image, index) => (
                        <GifItem key={index} {...image} />
                    ))}
                </div>
            </>
        )}
        
    </>
  )
    }
