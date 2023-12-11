const Person = (props) => {
  return (
    <div>
      {props.searchResults.map((person) => (
        <p key={`${person.name}-${person.number}-${person.id}`}>
          {person.name} {person.number}
          <button onClick={() => props.deletePerson(person.id, 1)}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Person;
