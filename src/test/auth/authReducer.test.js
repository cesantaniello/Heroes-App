import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";


describe('Tests on authReducer', () => {
    test('Should return the initial state', () => {
        const state = authReducer({logged:false}, {});
        expect(state).toEqual({logged:false});
    })

    test('Should authenticate and set user name', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
            }
        }
        const state = authReducer({logged:false}, action);
        expect(state).toEqual({
            name: 'Juan',
            logged: true
        })
    })

    test('Should logout and set user name off', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({logged:true}, action);
        expect(state).toEqual({
            logged: false
        })
    })
})