import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {

        // Lo usamos para mandar llamar un hook
        const { result } = renderHook( () => useFetchGifs('Overwatch'))
        // Del resultado anterior desestructuramos las variables que vamos a necesitar
        const { images, isLoading  } = result.current;

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy();

    })

    test('Debe de retornar un arreglo de imágenes y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs('Overwatch'))
        // Esto es una promesa de testing-library la cual ejecuta algo y espera que suceda
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading  } = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();

    })

})