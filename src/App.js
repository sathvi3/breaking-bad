import React, { useEffect, useState } from "react";
import { ReactComponent as BreakingBadLogo } from "./assets/Breaking_Bad_logo.svg";
import SearchBox from "./components/SearchBox/SearchBox";
import ProfileCardList from "./components/ProfileCardList/ProfileCardList";
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [charactersPerPage] = useState(8);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      fetch("https://www.breakingbadapi.com/api/characters/")
        .then((response) => response.json())
        .then((list) => {
          if (mounted) {
            setCharacters(list);
          }
        });
      setLoading(false);
    }, 2000);

    return () => (mounted = false);
  }, []);

  // const indexOfLastCharacter = currentPage * charactersPerPage;
  // const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  // const currentCharacters = filteredCharacters.slice(
  //   indexOfFirstCharacter,
  //   indexOfLastCharacter
  // );

  const filteredCharacters = characters.filter((character) => {
    if (searchField === "") {
      return character;
    } else if (
      character.name.toLowerCase().includes(searchField.toLowerCase())
    ) {
      return character;
    }
  });

  return (
    <div className="App">
      <div className="parent-logo">
        <BreakingBadLogo className="logo" />
      </div>
      <div className="search-box">
        <SearchBox
          placeholder="Search Breaking Bad Characters"
          onSearchChange={onSearchChange}
        />
      </div>
      {loading === true ? (
        // <LoadingIcon className="loading-icon" />
        <lord-icon
          src="https://cdn.lordicon.com/hbjlznlo.json"
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon>
      ) : (
        <ProfileCardList characters={filteredCharacters} />
      )}
    </div>
  );
}

export default App;
