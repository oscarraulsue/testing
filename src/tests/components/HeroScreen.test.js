import {HeroScreen} from '../../components/heroes/HeroScreen'
import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter, Route} from 'react-router'
import '@testing-library/jest-dom'

describe('Validar componente <HeroScreen/>', () => {

    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn(),
        length:10,

    }

    const wrapper = mount(
      
        <MemoryRouter initialEntries={['/Hero']}>
             <HeroScreen history={historyMock}/>
        </MemoryRouter>
        )

        test('Mostrar el redirect', () => {
 
            expect(wrapper.find('Redirect').exists()).toBe(true)
        })
        test('should', () => {

            const wrapper = mount(
      
                <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                     <Route path="/hero/:heroeId" component={HeroScreen}/>
                </MemoryRouter>
                )
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h3').text().trim()).toBe('Hulk')
        console.log(wrapper.html());
    })

    test('Hacer push', () => {
        const historyMock = {
            push: jest.fn(),
            goBack: jest.fn(),
            length:1,
    
        }
        const wrapper = mount(
  
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                 <Route path="/hero/:heroeId" 
                 component={()=> <HeroScreen history={historyMock}/>}
                 />
            </MemoryRouter>
            )
    
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalledWith('/');
})
test('volver a la pantalla anterior', () => {
    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn(),
        length:10,

    }
    const wrapper = mount(

        <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
             <Route path="/hero/:heroeId" 
             component={()=> <HeroScreen history={historyMock}/>}
             />
        </MemoryRouter>
        )
        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalled();
})



})