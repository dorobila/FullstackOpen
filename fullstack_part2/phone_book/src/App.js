import React, { useState } from "react";

import PhoneBook from "./Components/PhoneBook";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const rows = () =>
    persons.map(person => <PhoneBook key={person.name} persons={person} />);

  const addNewName = e => {
    e.preventDefault();
    const noteObject = {
      name: newName
    };

    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook.`);
    }

    setPersons(persons.concat(noteObject));
    setNewName("");
  };

  const handleNameChange = e => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
