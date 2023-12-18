const AddPerson = (persons, newName, newNumber, updatePerson) => {
  const existing = existingPerson(persons, newName);
  const personObject = {
    name: newName,
    number: newNumber,
  };

  if (existing) {
    if (existing.number === newNumber) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        updatePerson(existing.id, personObject);
        return;
      }
    }
  }

  return personObject;
};

const existingPerson = (persons, newName) => {
  return persons.find((person) => person.name === newName);
};

export default AddPerson;
