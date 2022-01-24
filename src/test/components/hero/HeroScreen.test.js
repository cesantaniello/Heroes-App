import {MemoryRouter, Routes, Route} from 'react-router-dom';
import {mount} from 'enzyme';
import { HeroScreen } from '../../../components/hero/HeroScreen';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Tests on <HeroScreen />', () => {
    test('Should not show HeroScreen if does not have any hero on URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No Hero Page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
    })

    test('Should show a hero if parameter exists and it can be found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No Hero Page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    })    
})