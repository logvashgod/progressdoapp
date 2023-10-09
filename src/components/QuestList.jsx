import React from "react";
import QuestItem from "./QuestItem";

function QuestList({ quests, completeQuest, deleteQuest }) {
  return (
    <div>
      <h1>Список заданий</h1>
      <div className="row">
        {quests.map((quest) => (
          <QuestItem
            quest={quest}
            key={quest.id}
            completeQuest={() => completeQuest(quest.expValue, quest)}
            deleteQuest={deleteQuest}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestList;
