import React, { useState } from "react";

function CompletedQuestList({ completedQuests }) {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div>
      <h2>
        Выполненные задания
        <button
          className="btn btn-link"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted ? "Скрыть" : "Показать"}
        </button>
      </h2>
      {showCompleted && (
        <ul>
          {completedQuests.map((quest) => (
            <li key={quest.id}>
              <strong>{quest.title}</strong> - {quest.completedDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompletedQuestList;
