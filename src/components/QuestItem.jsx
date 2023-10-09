import React from "react";
import MyButton from "./UI/MyButton";

function QuestItem({ quest, completeQuest, deleteQuest }) {
  return (
    <div className="col-md-4 mb-4">
      {" "}
      {/* Каждая карта будет занимать 4 колонки на больших экранах */}
      <div className="bg-secondary bg-gradient border  card rounded">
        <div className="card-body">
          <h5 className="card-title">{quest.title}</h5>
          <hr />
          <p className="card-text">{quest.body}</p>
          <p className="card-text">+{quest.expValue} XP</p>
          <MyButton
            completeQuest={() => completeQuest(quest.expValue, quest)}
            deleteQuest={() => deleteQuest(quest.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default QuestItem;
