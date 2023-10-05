import React from "react";

function UserPanel({ userStats }) {
  return (
    <div>
      <b>Ваша стастика</b>
      <h1>Уровень: {userStats.level}</h1>
      <h2>Опыт: {userStats.experience}</h2>
    </div>
  );
}

export default UserPanel;
