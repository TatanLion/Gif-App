const { render, screen } = require("@testing-library/react");
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Prueba sobre el componente <GifGrid />', () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })

    const category = 'Overwatch';

    test('Debe de mostrar el loading inicialmente', () => {
        render( <GifGrid category={category} /> );
        expect(screen.getByText(category));
    })

    test('Debe mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://test.com'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://test.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category} /> );
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2)
    })

})