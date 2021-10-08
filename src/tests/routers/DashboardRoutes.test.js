import {DashboardRoutes} from '../../routers/DashboardRoutes'
import React from 'react'
import {mount} from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import {MemoryRouter} from 'react-router'
import '@testing-library/jest-dom'

describe('Validar componente <AppRouter/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged:true,
            name: 'Oscar'
        }
    }
    test('Verificar el nombre del usario registrado ', () => {
        const warpper = mount(
        <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
             <DashboardRoutes/>
        </MemoryRouter>
        </AuthContext.Provider>
        )
        expect(warpper).toMatchSnapshot();
        expect(warpper.find('.text-info').text().trim()).toBe('Oscar')
    })

})