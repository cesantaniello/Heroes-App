import { Navbar } from "../../../components/ui/Navbar";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";



const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));


describe('Tests on <Navbar />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Test User',
            logged: true
        }
    }

    const wrapper = mount(

        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    test('Should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Test User');
    })

    test('Should call logout, call navigate and dispatch with values', () => {
        // const logout = jest.fn();
        // const navigate = jest.fn();
        // const dispatch = jest.fn();
        // const wrapper = render(<Navbar logout={logout} navigate={navigate} dispatch={dispatch} />);
        wrapper.find('button').prop('onClick')();
        // expect(logout).toHaveBeenCalled();
        // expect(navigate).toHaveBeenCalled();
        expect(contextValue.dispatch).toHaveBeenCalledWith({"type": types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});
    })
})