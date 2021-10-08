import {Navbar} from '../../components/ui/Navbar'
import React from 'react'
import {mount} from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import {MemoryRouter, Router} from 'react-router'
import '@testing-library/jest-dom'

describe('Validar componente <Navbar/>', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location:{},
        listen: jest.fn(),
        createHref: jest.fn(),

    }

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'Oscar'
        }
    }

        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
        <Router history={historyMock}>
             <Navbar/>
        </Router>
        </MemoryRouter>
        </AuthContext.Provider>
        )
        test('Validar el contenido del nombre del usario', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Oscar')
    })
    test('Validar la funcion logout y usar history', () => {
        wrapper.find('button').prop('onClick')()
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })

})