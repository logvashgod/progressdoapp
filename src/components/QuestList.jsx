import React from "react";
import QuestItem from "./QuestItem";

function QuestList({ quests, completeQuest, deleteQuest }) {
  return (
    <div>
      <h1>Список заданий</h1>
      {quests.map((quest) => (
        <QuestItem
          quest={quest}
          key={quest.id}
          completeQuest={() => completeQuest(quest.expValue, quest)} //тут я передал quest после мапа в App.js
          deleteQuest={deleteQuest}
        />
      ))}
    </div>
  );
}

export default QuestList;
