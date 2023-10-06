import React from "react";

function UserPanel({ userStats }) {
  return (
    <div>
      <b>Your stats</b>
      <h1>Lv.: {userStats.level}</h1>
      <h2>
        XP: {userStats.experience} of {userStats.experienceNeed}
      </h2>
    </div>
  );
}

export default UserPanel;
