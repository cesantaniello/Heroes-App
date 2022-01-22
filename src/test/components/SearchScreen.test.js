import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../components/search/SearchScreen";


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
})