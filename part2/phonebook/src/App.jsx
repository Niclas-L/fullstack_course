import { useState, useEffect } from "react";
import Search from "./components/Search";
import AddPerson from "./components/AddPerson";
import Notification from "./components/Notification";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = AddPerson(persons, newName, newNumber, updatePerson);
    if (newPerson) {
      setPersons(persons.concat(newPerson));
      personsService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      setNewName("");
      setNewNumber("");
      setNotificationMessage(`Added ${newPerson.name}`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
      return;
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(id);
      setPersons(persons.filter((p) => p.id !== id));
      setNotificationMessage(`Deleted ${person.name}`);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
    }
  };

  const updatePerson = (id, person) => {
    personsService.update(id, person).then((returnedPerson) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : returnedPerson))
      );
    });
    setNotificationMessage(`Updated ${person.name}`);
    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMessage} />

      <div>
        filter shown with{" "}
        <input value={searchTerm} onChange={handleSearchChange}></input>
      </div>

      <h2>add a new</h2>
      <form onSubmit={addPerson}>
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
      <div>
        <Search
          persons={persons}
          searchTerm={searchTerm}
          deletePerson={deletePerson}
        />
      </div>
    </div>
  );
};

export default App;
