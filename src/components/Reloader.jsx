import React from "react";

function Reloader({ addQuest }) {
  return (
    <button className="btn btn-danger" onClick={addQuest}>
      Reload
    </button>
  );
}

export default Reloader;
