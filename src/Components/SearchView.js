import Hero from "./Hero";
import { Link } from "react-router-dom";
const MovieCard = ( {movie} ) => {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : 'https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'; // Fallback image
    const detailUrl = `/movie/${movie.id}`
    return(
    <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card h-100">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={detailUrl} className="btn btn-primary">Click for details</Link>
            </div>
        </div>
    </div>
    )
}

const SearchView = ({keyword,searchResults}) => {
    const title= `Your search for: ${keyword}`
    const results = searchResults.map((obj,i) => {
        return(<MovieCard movie={obj} key={i} />)
    })
    const hasResults = searchResults && searchResults.length > 0;

    return(
        <>
            <Hero text={title} />
            <div className="container my-5">
                {hasResults 
                ? (<div className="row">
                    {results}
                </div>) 
                : (
                <div className="alert alert-warning" role="alert">
                    No results found for "{keyword}".
                </div>
                )}
            </div>
        </> 
    )
}
export default SearchView;