import React, { useState } from "react";

import PhoneBook from "./Components/PhoneBook";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const rows = () =>
    persons.map(person => <PhoneBook key={person.name} person={person} />);

  const addNewName = e => {
    e.preventDefault();
    const noteObject = {
      name: newName,
      number: newNumber
    };

    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook.`);
    }

    setPersons(persons.concat(noteObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = e => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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
