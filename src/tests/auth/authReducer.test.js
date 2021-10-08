import authReducer from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Prueba en authReducer', ()=>{
    test('debe de retornar el estado por defecto', () =>{
        const state = authReducer({ logged: false },{});
        expect(state).toEqual({logged:false});
    })

    test ('debe autenticar y colocar el nasme del usuario', () =>{
        const action ={
            type: types.login,
            payload:{
                name: 'Oscar'
            }
        }
        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged:true,
            name: 'Oscar'
        });
    })
    test ('debe borrar el nombre del usuario y logged en false', () =>{
        const action ={
            type: types.logout,
        }
        const state = authReducer({ logged: false, name: 'Oscar' }, action);
        expect(state).toEqual({logged:false})
    })
})