import React from "react";

import CountryData from "./CountryData";

const CountryList = ({ countries, newFilter, setFilterUsingButton }) => {
  let filteredList = countries.filter(country =>
    country.name.toUpperCase().includes(newFilter.toUpperCase())
  );
  let listLength = filteredList.length;
  console.log(filteredList);

  if (newFilter.length === 0 || listLength === 0) {
    return <div />;
  }

  if (listLength >= 10) {
    return <div>Too many matches, specify another filter</div>;
    // return <div>hi</div>;
  }

  if (listLength > 1) {
    return filteredList.map(country => (
      <div key={country.name}>
        {country.name}{" "}
        <button value={country.name} onClick={setFilterUsingButton}>
          {" "}
          show{" "}
        </button>
      </div>
    ));
  } else {
    return (
      <div>
        <CountryData country={filteredList[0]} />
      </div>
    );
  }
};

export default CountryList;
