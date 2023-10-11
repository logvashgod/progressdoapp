import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestList from "./components/QuestList";
import UserPanel from "./components/UI/UserPanel";
import NavBar from "./components/UI/NavBar";
import CompletedQuestList from "./components/CompletedQuestList";

// Функция для сохранения данных в локальное хранилище
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Функция для загрузки данных из локального хранилища
function loadFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function App() {
  // Загрузка данных из локального хранилища при запуске приложения
  const initialQuests = loadFromLocalStorage("quests");
  const initialCompletedQuests = loadFromLocalStorage("completedQuests");
  const initialUserStats = loadFromLocalStorage("userStats");

  const [quests, setQuests] = useState(
    initialQuests || [
      {
        id: Math.floor(Math.random() * 1000),
        title: "Закончить приложение",
        body: "Нужно закончить это приложение в сроки",
        expValue: 50,
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Приготовить ужин и съесть",
        body: "Сделай это",
        expValue: 5,
        completedDate: null,
      },
    ]
  );

  const [completedQuests, setCompletedQuests] = useState(
    initialCompletedQuests || []
  );

  const [userStats, setUserStats] = useState(
    initialUserStats || {
      experience: 0,
      level: 1,
      experienceNeed: 100,
    }
  );

  const completeQuest = (expValue, quest) => {
    setUserStats((prevState) => {
      const newExperience = prevState.experience + expValue;
      const { level, experienceNeed, experienceToZero } = getLevel(
        prevState.experienceNeed,
        newExperience,
        prevState.level
      );

      const completedQuestsItem = {
        ...quest,
        completedDate: new Date().toLocaleString(),
      };

      setCompletedQuests((prevCompletedQuests) => [
        ...prevCompletedQuests,
        completedQuestsItem,
      ]);

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
      experienceToZero = 0; // Обнуляем опыт после достижения нового уровня
    }
    return {
      level: nextLevel,
      experienceNeed: nextExperienceNeed,
      experienceToZero: experienceToZero,
    };
  };

  const deleteQuest = (id) => {
    setQuests(quests.filter((quest) => quest.id !== id));
  };

  // Сохранение данных в локальное хранилище при изменении
  useEffect(() => {
    saveToLocalStorage("quests", quests);
    saveToLocalStorage("completedQuests", completedQuests);
    saveToLocalStorage("userStats", userStats);
  }, [quests, completedQuests, userStats]);

  return (
    <div>
      <NavBar />
      <UserPanel userStats={userStats} />
      <QuestList
        quests={quests}
        completeQuest={completeQuest}
        onDeleteQuest={deleteQuest}
      />
      <CompletedQuestList completedQuests={completedQuests} />
    </div>
  );
}

export default App;
