function CompletedQuestList({ completedQuests }) {
  return (
    <div>
      <h2>Выполненные задания</h2>
      <ul>
        {completedQuests.map((quest) => (
          <li key={quest.id}>
            <strong>{quest.title}</strong> - {quest.completedDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedQuestList;
