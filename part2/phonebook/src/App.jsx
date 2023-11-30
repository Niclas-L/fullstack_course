import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    console.log("persons:", persons);
    console.log("newName:", newName);
    console.log("newNumber:", newNumber);
    if (existingPerson(newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    console.log("Name event.target.value:", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log("Number event.target.value:", event.target.value);
    setNewNumber(event.target.value);
  };

  const existingPerson = (name) => {
    return persons.find((person) => person.name === name);
  };

  const Person = ({ person }) => {
    return (
      <p>
        {person.name} {person.number}
      </p>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>

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
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
