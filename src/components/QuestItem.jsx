import React from "react";
import MyButton from "./UI/MyButton";
function QuestItem({ quest, completeQuest }) {
  return (
    <div>
      <div>{quest.title}</div>
      <div> xp you need:{quest.expValue}</div>
      <div>{quest.body}</div>
      <MyButton completeQuest={() => completeQuest(quest.expValue)} />
    </div>
  );
}

export default QuestItem;
