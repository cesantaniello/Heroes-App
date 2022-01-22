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
})