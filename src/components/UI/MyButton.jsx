import React from "react";

function MyButton({ completeQuest, onDeleteQuest, expValue, quest }) {
  const handleOnClick = () => {
    completeQuest(expValue, quest); // Передаем expValue и quest как два отдельных аргумента
    onDeleteQuest(quest.id); // Передаем аргумент для удаления квеста
  };

  return (
    <button className="btn btn-warning" onClick={handleOnClick}>
      Done!
    </button>
  );
}

export default MyButton;
