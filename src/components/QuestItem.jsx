import React from "react";
import MyButton from "./UI/MyButton";

function QuestItem({ quest, completeQuest, onDeleteQuest }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="bg-secondary bg-gradient border card rounded position-relative"
        style={{ width: "30rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">{quest.title}</h5>
          <hr />
          <p className="card-text">{quest.body}</p>
          <p className="card-text">+{quest.expValue} XP</p>
          <MyButton
            completeQuest={completeQuest}
            onDeleteQuest={onDeleteQuest}
            expValue={quest.expValue}
            quest={quest}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestItem;
