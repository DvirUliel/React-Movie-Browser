// src/NotFound.js
import React from "react";


const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1>Oops! 404...</h1>
      <h4>Sorry, the page you are looking for does not exist.</h4>
      <img
        src="https://emoji.iamrohit.in/img-apple/1f97a.png"
        alt="Sad Smiley"
        className="img-fluid my-3"
        style={{ width: "150px" }}
      />
      <div className="my-3">
        <a href="/" className="btn btn-primary">Go Home</a>
      </div>
    </div>
  );
};

export default NotFound;
