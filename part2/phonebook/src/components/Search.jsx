import Person from "./Person";

const Search = (props) => {
  const searchResults = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.searchTerm.toLowerCase())
  );
  return <Person searchResults={searchResults} />;
};

export default Search;
