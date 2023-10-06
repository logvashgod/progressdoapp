import React from "react";
import QuestItem from "./QuestItem";

function QuestList({ quests, completeQuest, deleteQuest }) {
  return (
    <div>
      <h1>Список заданий</h1>
      {quests.map((quest) => {
        return (
          <QuestItem
            quest={quest}
            key={quest.id}
            completeQuest={completeQuest}
            deleteQuest={deleteQuest}
          />
        );
      })}
    </div>
  );
}

export default QuestList;
