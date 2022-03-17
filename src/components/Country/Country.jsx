import React from "react";
import "./Country.css";
const Country = ({ country }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={country.flags.png} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
