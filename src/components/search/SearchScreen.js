import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: '',
    });

    const { searchText } = formValues;
    const heroesFiltered = getHeroesByName('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText)
    }

    return (
        <>
            <h1>Search a hero</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr />

                    <form 
                        className="d-grid gap-2"
                        onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button 
                            className="btn btn-primary mt-3"
                            type="submit">
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>        
            </div>
        </>
    )
}