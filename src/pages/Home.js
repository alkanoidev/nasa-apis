import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ReactComponent as NasaLogo } from "../components/nasa-logo.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <NasaLogo />
        <h1>Explore Nasa Apis</h1>
      </div>

      <Link className="home-link" to="/nasaphoto">
        picture of day <FaAngleDoubleRight />
      </Link>
      <Link className="home-link" to="/marsroverphotos">
        Mars Rover Photos <FaAngleDoubleRight />
      </Link>
      <Link className="home-link" to="/imageandvideolibrary">
        Image and Video Library <FaAngleDoubleRight />
      </Link>
      <footer>
        <a href="https://api.nasa.gov/" id="nasaLink">
          Nasa Apis
        </a>
      </footer>
    </div>
  );
}
