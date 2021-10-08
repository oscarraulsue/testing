import {AppRouter} from '../../routers/AppRouter'
import React from 'react'
import {mount} from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import '@testing-library/jest-dom'

describe('Pruebas en <AppRouter/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:false
        }
    }
    test('Mostrar login si no esta autenticado', () => {
        const warpper = mount(
        <AuthContext.Provider value={contextValue}>
        <AppRouter/>
        </AuthContext.Provider>
        )
        expect(warpper).toMatchSnapshot();
    })
    test('Mostrar Marvel si esta autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged:true,
                name: 'Oscar'
            }
        }
        const warpper = mount(
        <AuthContext.Provider value={contextValue}>
        <AppRouter/>
        </AuthContext.Provider>
        )
        expect(warpper).toMatchSnapshot();
        expect(warpper.find('.navbar').exists()).toBe(true)
    })

})