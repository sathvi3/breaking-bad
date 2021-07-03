import React from "react";
import "./ProfileCard.css";

function ProfileCard({ character }) {
  const { name } = character;
  const getUnderscoredName = (name) => {
    let underscoredString;
    for (var i = 0; i < name.length; i++) {
      underscoredString = name.replace(" ", "_");
    }
    return underscoredString;
  };

  return (
    <a
      target="_blank"
      href={`https://en.wikipedia.org/wiki/${getUnderscoredName(name)}`}
      rel="noreferrer noopener"
    >
      <div className="ProfileCard">
        <div className="profile-card-inner">
          <div className="profile-card-front">
            <img
              className="profile-img"
              src={character.img}
              alt={character.name}
            />
          </div>
          <div className="profile-card-back">
            <h1>Name : {character.name}</h1>
            <p>Birthday : {character.birthday}</p>
            <p>Occupation : {character.occupation}</p>
            <p>Nickname : {character.nickname}</p>
            <h3>Portrayed By: {character.portrayed}</h3>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProfileCard;
