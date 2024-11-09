import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(
      `${apiUrl}/movie/${id}?&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [apiUrl,apiKey,id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {

        const posterPath = movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : 'https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'; // Fallback image
        const backDropUrl =`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`

        return (
        <>
          <Hero text={movieDetails.original_title}  backdrop={backDropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <p><strong>Status:</strong> {movieDetails.status}</p>
                <p><strong>Vote average:</strong> {movieDetails.vote_average}</p>
                <p><strong>Vote count:</strong> {movieDetails.vote_count}</p>
                <div>
                  <h4>Genres:</h4>
                  <div>
                    {movieDetails.genres.map((genre) => (
                      <span key={genre.id} className="badge bg-secondary mx-1">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovieDetails();
};
export default MovieView;
