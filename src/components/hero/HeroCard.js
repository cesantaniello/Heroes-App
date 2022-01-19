import {Link} from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="card animate__animated animate__fadeIn">
                <div className="row no-gutters">
                    <div className="col-4">        
                        <img src={imagePath} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                ( alter_ego !== publisher ) &&
                                <p className="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`} className="btn btn-primary">
                                See more
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}
