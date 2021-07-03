import React, { useEffect, useState } from "react";
import { ReactComponent as BreakingBadLogo } from "./assets/Breaking_Bad_logo.svg";
import SearchBox from "./components/SearchBox/SearchBox";
import ProfileCardList from "./components/ProfileCardList/ProfileCardList";
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [characters, setCharacters] = useState([]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    let mounted = true;
    fetch("https://www.breakingbadapi.com/api/characters/")
      .then((response) => response.json())
      .then((list) => {
        if (mounted) {
          setCharacters(list);
        }
      });

    return () => (mounted = false);
  }, []);

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
      <ProfileCardList characters={filteredCharacters} />
    </div>
  );
}

export default App;
