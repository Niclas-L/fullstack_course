import { useState } from "react";
import Search from "./components/Search";
import AddPerson from "./components/AddPerson";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const newPerson = AddPerson(persons, newName, newNumber);
    if (newPerson) {
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNewNumber("");
    return;
  };

  const handleNameChange = (event) => {
    console.log("Name event.target.value:", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log("Number event.target.value:", event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    console.log("Search event.target.value:", event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

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
        <Search persons={persons} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default App;
