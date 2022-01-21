import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Tests on <AppRouter />', () => {

    
    test('Should show a login if the user is not authenticated', () => {

        const contextValue = {
            user: {logged: false}
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');
    })

    test('Should show Marvel component if the user is authenticated', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Carlos'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })    
})