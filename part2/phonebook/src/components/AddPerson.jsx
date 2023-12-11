const AddPerson = (persons, newName, newNumber, deletePerson) => {
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
        deletePerson(existing.id, 0);
        return personObject;
      }
    }
  }

  return personObject;
};

const existingPerson = (persons, newName) => {
  return persons.find((person) => person.name === newName);
};

export default AddPerson;
