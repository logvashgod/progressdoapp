import React from "react";
import QuestItem from "./QuestItem";

function QuestList({ quests, completeQuest }) {
  return (
    <div>
      <h1>Список заданий</h1>
      {quests.map((quest) => {
        return (
          <QuestItem
            quest={quest}
            key={quest.id}
            completeQuest={completeQuest}
          />
        );
      })}
    </div>
  );
}

export default QuestList;
