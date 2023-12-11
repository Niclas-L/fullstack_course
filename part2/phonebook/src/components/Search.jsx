import Person from "./Person";

const Search = (props) => {
  const searchResults = props.persons
    ? props.persons.filter(
        (person) =>
          person.name &&
          person.name.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
    : [];

  return <Person searchResults={searchResults} />;
};

export default Search;
