import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
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
                        (q === '') 
                            ? <div className="alert alert-info">Search a hero</div>
                            : (heroesFiltered.length === 0)
                                && <div className="alert alert-danger">No results: {q}</div>
                    }

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