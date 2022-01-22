import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../components/search/SearchScreen";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe('Tests on <SearchScreen />', () => {
    test('Should show correctly with default values', () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
    })

    test('Should show Batman and an input with queryString value', () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchScreen />
        </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman')
    })

    test('Should show an error if hero is not found', () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <SearchScreen />
        </MemoryRouter>
        );
        expect(wrapper.find('.alert-danger').text().trim()).toBe('No results: batman123')
    })

    test('Should call navigate to new screen', () => {
        const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>
        );

        wrapper.find('input').simulate('change', 
            { target: {
                name: 'searchText',
                value: 'batman' 
            } 
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })

        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
    })
})