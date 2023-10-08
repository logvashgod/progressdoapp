import React from "react";
import MyButton from "./UI/MyButton";

function QuestItem({ quest, completeQuest, deleteQuest }) {
  return (
    <div>
      <div>{quest.title}</div>
      <div> {quest.expValue} XP</div>
      <div>{quest.body}</div>
      <MyButton
        completeQuest={() => completeQuest(quest.expValue)}
        deleteQuest={() => deleteQuest(quest.id)}
      />
    </div>
  );
}

export default QuestItem;
