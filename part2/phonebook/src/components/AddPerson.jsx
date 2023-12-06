const AddPerson = (persons, newName, newNumber) => {
  if (existingPerson(persons, newName)) {
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
  return newName in persons;
};

export default AddPerson;
