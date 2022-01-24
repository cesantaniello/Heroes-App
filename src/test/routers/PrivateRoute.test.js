import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import {PrivateRoute} from '../../../src/routers/PrivateRoute';

describe('Tests on <PrivateRoute />', () => {

    Storage.prototype.getItem = jest.fn();

    test('Should show if the component is authenticated and being saved into the localStorage', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'test'
            }
        };
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.text().trim()).toBe('Private Component');
    })

})