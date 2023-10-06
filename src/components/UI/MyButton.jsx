import React from "react";

function MyButton({ completeQuest, deleteQuest }) {
  const handleOnClick = () => {
    deleteQuest();
    completeQuest();
  };

  return <button onClick={handleOnClick}>Done!</button>;
}

export default MyButton;
