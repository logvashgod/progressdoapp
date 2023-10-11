import QuestItem from "./QuestItem";

function QuestList({ quests, completeQuest, onDeleteQuest }) {
  // Проверяем, есть ли quests, прежде чем вызывать map
  if (!quests || quests.length === 0) {
    return (
      <div>
        <h1>Список заданий</h1>
        <p>Список заданий пуст.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Список заданий</h1>
      <div className="row">
        {quests.map((quest) => (
          <QuestItem
            quest={quest}
            key={quest.id}
            completeQuest={() => completeQuest(quest.expValue, quest)}
            onDeleteQuest={onDeleteQuest}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestList;
