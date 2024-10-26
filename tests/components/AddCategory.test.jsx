import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from '../../src/components'

describe('Prueba sobre <AddCategory />', () => {

    test('Debe cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox')
        
        fireEvent.input(input, { target: { value: 'Moira' } })
        expect(input.value).toBe('Moira')
        // screen.debug();
    })

    test('Debe de llamar onNewCategory si el input contiene un valor', () => {

        const inputValue = 'Moira';
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } /> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); // Fue llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); // Fue llamada por lo menos 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) // Fue llamada con el valor del input
    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } /> )
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    })

})