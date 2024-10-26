import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas sobre el helper getGifs', () => { 

    test('Debe de retornar un arreglo de gifs', async () => {

        // Usamos await ya que es una promesa
        const gifs = await getGifs('Overwatch', 20)

        // Que sea mayor a 0 lo que retorne
        expect(gifs.length).toBeGreaterThan(0);

        // Vamos a evaluar que tenga la estructura que estoy esperando de respuesta
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })

})