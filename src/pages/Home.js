import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ReactComponent as NasaLogo } from "../components/nasa-logo.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <NasaLogo />
        <h1>Explore Nasa Apis</h1>
      </div>
      <motion.div
        initial={{ y: "-300px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link className="home-link" to="/nasaphoto">
          picture of day <FaAngleDoubleRight />
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: "-300px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Link className="home-link" to="/marsroverphotos">
          Mars Rover Photos <FaAngleDoubleRight />
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: "-300px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link className="home-link" to="/imageandvideolibrary">
          Image and Video Library <FaAngleDoubleRight />
        </Link>
      </motion.div>
      <footer>
        <a href="https://api.nasa.gov/" id="nasaLink">
          Nasa Apis
        </a>
      </footer>
    </div>
  );
}
