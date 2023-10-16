import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestList from "./components/QuestList";
import UserPanel from "./components/UI/UserPanel";
import NavBar from "./components/UI/NavBar";
import CompletedQuestList from "./components/CompletedQuestList";
import Reloader from "./components/Reloader";

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
        title: "Купить новую подушку",
        body: "Выбрать удобную подушку и купить ее",
        expValue: 25,
        category: "Glava I",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Купить и установить материнскую плату",
        body: "Подобрать и купить новую материнскую плату, затем установить ее в компьютер",
        expValue: 250,
        category: "Glava I",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Пойти к доктору",
        body: "Записаться на прием к врачу и посетить его",
        expValue: 20,
        category: "Glava I",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Получить больничный",
        body: "Получить больничный лист от врача",
        expValue: 30,
        category: "Glava I",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Написать психологу",
        body: "Записаться на консультацию у психолога и написать ему письмо",
        expValue: 35,
        category: "Glava I",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Изучить рынок",
        body: "Провести анализ финансового рынка",
        expValue: 20,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Выделить деньги для инвестиций",
        body: "Решить, сколько денег выделить для инвестиций",
        expValue: 20,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Купить акции",
        body: "Выбрать компанию и купить акции",
        expValue: 20,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Купить акции (сложное)",
        body: "Выбрать компанию и купить акции (сложное)",
        expValue: 300,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Выбрать банк для инвестирования",
        body: "Найти подходящий банк для инвестиций",
        expValue: 20,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Положить депозит",
        body: "Открыть депозит в выбранном банке",
        expValue: 20,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Положить депозит (сложное)",
        body: "Открыть депозит в выбранном банке (сложное)",
        expValue: 300,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Выделить деньги для инвестиций (повтор)",
        body: "Решить, сколько денег выделить для инвестиций (повтор)",
        expValue: 20,
        category: "Where's Money",
        completedDate: null,
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Выделить деньги для инвестиций (повтор, сложное)",
        body: "Решить, сколько денег выделить для инвестиций (повтор, сложное)",
        expValue: 300,
        category: "Where's Money",
        completedDate: null,
      },
    ]
  );

  const addQuest = () => {
    const newQuest = {
      id: Math.floor(Math.random() * 1000),
      title: "Новый квест", // Задайте заголовок нового квеста
      body: "Описание нового квеста", // Задайте описание нового квеста
      expValue: 20, // Укажите количество опыта, которое дает новый квест
      category: "Глава I", // Задайте категорию нового квеста
      completedDate: null,
    };

    if (!quests.some((quest) => quest.id === newQuest.id)) {
      setQuests((prevQuests) => [...prevQuests, newQuest]);
    }
  };

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

  const [categories, setCategories] = useState([
    "ALL",
    "Glava I",
    "Front",
    "Where's Money",
    "S Diplomacy",
    "Android",
  ]);

  const handleCategoryChange = (category) => {
    console.log(`Changing active category to: ${category}`);
    setActiveCategory(category);
  };

  const [activeCategory, setActiveCategory] = useState("ALL");

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
        categories={categories}
        activeCategory={activeCategory}
        quests={quests}
        completeQuest={completeQuest}
        onDeleteQuest={deleteQuest}
        onCategoryChange={handleCategoryChange}
      />
      <Reloader addQuest={addQuest} />

      <CompletedQuestList completedQuests={completedQuests} />
    </div>
  );
}

export default App;
