import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';


describe('Tests on <DashboardRoutes />', () => {
    
    const contextValue = {
        user: {
            name: 'Test User',
            logged: true
        }
    }

    test('Should render correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Test User');
    });
})