import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileCardList.css";

function ProfileCardList({ characters }) {
  return (
    <div className="ProfileCardList">
      {characters.map((character) => (
        <ProfileCard key={character.char_id} character={character} />
      ))}
    </div>
  );
}

export default ProfileCardList;
