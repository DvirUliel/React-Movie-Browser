import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead fs-4">
                Explore your favorite movies, search for the latest releases, and
                discover top-rated films. Use our search functionality to find movies
                by title and get detailed information about their genres, overview, and
                reviews. Whether you're a casual viewer or a movie buff, Movie Browser
                is your go-to platform for all things cinema.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
