import CategoriesList from "./CategoriesList";
import QuestItem from "./QuestItem";

function QuestList({
  quests,
  completeQuest,
  onDeleteQuest,
  categories,
  activeCategory,
  onCategoryChange,
}) {
  const filteredQuests = quests.filter((quest) => {
    return activeCategory === "ALL" || quest.category === activeCategory;
  });

  return (
    <div>
      <h1>Список заданий</h1>
      <CategoriesList
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
      {filteredQuests.length > 0 ? (
        <div className="row">
          {filteredQuests.map((quest) => (
            <QuestItem
              quest={quest}
              key={quest.id}
              completeQuest={() => completeQuest(quest.expValue, quest)}
              onDeleteQuest={onDeleteQuest}
            />
          ))}
        </div>
      ) : (
        <p>Список заданий пуст.</p>
      )}
    </div>
  );
}

export default QuestList;
