const AddPerson = (persons, newName, newNumber) => {
  const existing = existingPerson(persons, newName);

  if (existing) {
    alert(`${newName} is already added to phonebook`);
    return;
  }

  const personObject = {
    name: newName,
    number: newNumber,
  };

  return personObject;
};

const existingPerson = (persons, newName) => {
  return persons.find((person) => person.name === newName);
};

export default AddPerson;
