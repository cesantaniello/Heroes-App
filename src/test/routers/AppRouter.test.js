import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Tests on <AppRouter />', () => {

    const contextValue = {
        user: {logged: false}
    }

    test('Should show a login if the user is not authenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');
    })
})