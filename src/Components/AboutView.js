import Hero from "./Hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container ">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead fs-4">
                Movie Browser is a platform created to provide movie enthusiasts with a
                simple and efficient way to search for films, explore new titles, and
                find all the necessary details in one place. Our mission is to deliver
                an intuitive browsing experience for movie lovers worldwide, making it
                easier to find information about the films you love. Whether you're
                searching for classics or the latest blockbusters, Movie Browser has
                you covered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutView;
