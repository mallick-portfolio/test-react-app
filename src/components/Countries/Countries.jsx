import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-4 row-cols-sm-6 g-4">
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
