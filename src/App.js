import React, { useState } from "react";
import QuestList from "./components/QuestList";
import UserPanel from "./components/UI/UserPanel";

function App() {
  const [quests, setQuests] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      title: "Закончить приложение",
      body: "Нужно закончить это приложение в сроки",
      expValue: 50,
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "Попить кофе",
      body: "Пей кофе или чай на выбор",
      expValue: 10,
    },
  ]);

  const [userStats, setUserStats] = useState({
    experience: 0,
    level: 1,
    experienceNeed: 100,
  });

  const completeQuest = (expValue) => {
    setUserStats((prevState) => {
      const newExperience = prevState.experience + expValue;
      const { level, experienceNeed, experienceToZero } = getLevel(
        prevState.experienceNeed,
        newExperience,
        prevState.level
      );
      return {
        ...prevState,
        experience: experienceToZero,
        level: level,
        experienceNeed: experienceNeed,
      };
    });
  };

  const getLevel = (experienceNeed, experience, level) => {
    let nextLevel = level;
    let nextExperienceNeed = experienceNeed;
    let experienceToZero = experience;
    if (experience >= experienceNeed) {
      nextLevel++;
      nextExperienceNeed = experienceNeed + 75;
      experienceToZero = 0; // Обнуляем опыт после достижения нового уровня.
    }
    return {
      level: nextLevel,
      experienceNeed: nextExperienceNeed,
      experienceToZero: experienceToZero,
    };
  };

  return (
    <div className="App">
      <UserPanel
        quests={quests}
        getLevel={getLevel}
        completeQuest={completeQuest}
        userStats={userStats}
      />
      <QuestList quests={quests} completeQuest={completeQuest} />
    </div>
  );
}

export default App;
