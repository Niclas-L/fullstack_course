const Person = (props) => {
  return (
    <div>
      {props.searchResults.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Person;
