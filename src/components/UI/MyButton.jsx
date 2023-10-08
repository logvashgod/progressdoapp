import React from "react";

function MyButton({ completeQuest, deleteQuest }) {
  const handleOnClick = () => {
    deleteQuest();
    completeQuest();
  };

  return (
    <button class="btn btn-outline-success" onClick={handleOnClick}>
      Done!
    </button>
  );
}

export default MyButton;
