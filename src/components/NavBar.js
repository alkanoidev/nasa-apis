import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ startDate, setStartDate }) {
  return (
    <div className="navbar">
      <ul>
        <i className="fas fa-home"></i>
        <Link className="link" to="/">
          Take me home
        </Link>
        <input
          value={startDate}
          type="date"
          onChange={(event) => {
            setStartDate(event.target.value);
          }}
        />
      </ul>
    </div>
  );
}
