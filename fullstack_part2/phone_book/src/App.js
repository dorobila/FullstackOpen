import React, { useState, useEffect } from "react";

import personsService from "./Services/person";
import Filter from "./Components/Filter";
import Notification from "./Components/Notification";
import PersonForm from "./Components/PersonForm";
import PhoneBook from "./Components/PhoneBook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showFilter, setshowFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response);
      })
      .catch(error => showMessage("Could not retrieve data", false));
  }, []);

  const addNewName = e => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    if (persons.some(e => e.name === newName)) {
      let personId = persons.find(item => item.name === newName);

      let updatedEntry = Object.assign(personId, personObject);

      if (
        window.confirm(
          `Do you want to update ${newName} with number ${newNumber}?`
        )
      ) {
        personsService
          .update(personId.id, personObject)
          .then(() => {
            setPersons(
              persons.map(item => (item.name === newName ? updatedEntry : item))
            );
            setNewName("");
            setNewNumber("");
            showMessage(`User ${newName} phone number updated`);
          })
          .catch(error => {
            showMessage(
              `Update failed. User ${newName} has already been removed from the phone book.`,
              false
            );
            setPersons(persons.filter(n => n.name !== newName));
          });
      }
    } else {
      if (persons.some(e => e.number === newNumber)) {
        showMessage(`# ${newNumber} is already in the phone book.`, false);
      } else {
        if (newName === "" || newNumber === "") {
          showMessage(`The name and number must not be empty`, false);
        } else {
          personsService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson));
              setNewName("");
              setNewNumber("");
              showMessage(`User ${newName} has been added to the phone book`);
            })
            .catch(error => {
              console.log(error.response.data.error);
              return showMessage(
                `Failed to add number. More about error: ${
                  error.response.data.error
                }`,
                false
              );
            });
          personsService
            .getAll()
            .then(response => {
              setPersons(response);
            })
            .catch(error => showMessage("Could not retrieve data", false));
        }
      }
    }
  };

  const removeEntry = person => {
    if (window.confirm(`Remove ${person.name}?`)) {
      personsService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(item => item.id !== person.id));
          showMessage(`${person.name} has been removed from the phone book`);
        })
        .catch(error => {
          showMessage(
            `Removal failed. User ${
              person.name
            } has already been removed from the phone book.`,
            false
          );
          personsService
            .getAll()
            .then(response => {
              setPersons(response);
            })
            .catch(error => showMessage("Could not retrieve data", false));
        });
    }
  };

  const handleNameChange = e => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const showMessage = (message, successNotification = true) => {
    setNotification(message);
    setSuccess(successNotification);

    setTimeout(() => {
      setNotification(null);
      setSuccess(null);
    }, 3000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} success={success} />
      <Filter showFilter={showFilter} setshowFilter={setshowFilter} />
      <h2>add a new</h2>
      <PersonForm
        addNewName={addNewName}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        <PhoneBook
          persons={persons}
          showFilter={showFilter}
          removeEntry={removeEntry}
        />
      </ul>
    </div>
  );
};

export default App;
