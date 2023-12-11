const Person = (props) => {
  return (
    <div>
      {props.searchResults.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => props.deletePerson(person.id)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default Person;
