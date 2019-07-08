import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./Components/Filter";
import CountryList from "./Components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const setFilterUsingButton = e => {
    setNewFilter(e.target.value);
  };

  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <CountryList
        countries={countries}
        newFilter={newFilter}
        setFilterUsingButton={setFilterUsingButton}
      />
    </div>
  );
};

export default App;
