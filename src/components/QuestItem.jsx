import React from "react";
import MyButton from "./UI/MyButton";
function QuestItem({ quest, completeQuest, deleteQuest }) {
  return (
    <div>
      <div>{quest.title}</div>
      <div> xp you get:{quest.expValue}</div>
      <div>{quest.body}</div>
      <MyButton
        completeQuest={() => completeQuest(quest.expValue)}
        deleteQuest={() => deleteQuest(quest.id)}
      />
    </div>
  );
}

export default QuestItem;
