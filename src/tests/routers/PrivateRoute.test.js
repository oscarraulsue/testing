import {PrivateRoute} from '../../routers/PrivateRoute'
import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter} from 'react-router'
 Storage.prototype.setItem = jest.fn()

describe('Validar las rutas privadas', ()=>{

    const porps={
        location:{
        pathname: '/marvel'
        }
    }
    test('Mostrar el componente si el usuario esta autenticado', () =>{
        const wrapper = mount(
            <MemoryRouter>
            <PrivateRoute
            isAuthenticated={false}
            component = {()=><span>Componente</span>}
            {...porps}
                  />
            </MemoryRouter>

     )
            console.log("xxxx"+wrapper.html()+"xxxx")
     expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    })

})