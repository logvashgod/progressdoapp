// import { useState } from "react";

// const [quests, setQuests] = useState([
//   {
//     id: Math.floor(Math.random() * 1000),
//     title: "Закончить приложение",
//     body: "Нужно закончить это приложение в сроки",
//     expValue: 50,
//     completedDate: null,
//   },
//   {
//     id: Math.floor(Math.random() * 1000),
//     title: "Попить кофе",
//     body: "Пей кофе или чай на выбор",
//     expValue: 10,
//     completedDate: null,
//   },
//   {
//     id: Math.floor(Math.random() * 1000),
//     title: "Уборка ванной комнаты",
//     body: "Очистить унитаз, раковину и ванну от грязи и пыли. Помыть полы и вытереть зеркало. Заменить полотенца и заправить кровать.",
//     expValue: 50,
//     completedDate: null,
//   },
//   {
//     id: Math.floor(Math.random() * 1000),
//     title: "Приготовить ужин и съесть",
//     body: "Сделай это",
//     expValue: 5,
//     completedDate: null,
//   },
// ]);

// const [completedQuests, setCompletedQuests] = useState([]);

// const [userStats, setUserStats] = useState({
//   experience: 0,
//   level: 1,
//   experienceNeed: 100,
// });

// const [achievements, setAchievements] = useState([]);

// const completeQuest = (expValue, quest) => {
//   setUserStats((prevState) => {
//     const newExperience = prevState.experience + expValue;
//     const { level, experienceNeed, experienceToZero } = getLevel(
//       prevState.experienceNeed,
//       newExperience,
//       prevState.level
//     );

//     const completedQuestsItem = {
//       ...quest,
//       completedDate: new Date().toLocaleString(),
//     };

//     setCompletedQuests((prevCompletedQuests) => [
//       ...prevCompletedQuests,
//       completedQuestsItem,
//     ]);

//     const experienceChange = newExperience - prevState.experience;
//     return {
//       ...prevState,
//       experience: experienceToZero,
//       level: level,
//       experienceNeed: experienceNeed,
//     };
//   });
// };

// const getLevel = (experienceNeed, experience, level) => {
//   let nextLevel = level;
//   let nextExperienceNeed = experienceNeed;
//   let experienceToZero = experience;
//   if (experience >= experienceNeed) {
//     nextLevel++;
//     nextExperienceNeed = experienceNeed + 75;
//     experienceToZero = 0; // Обнуляем опыт после достижения нового уровня
//   }
//   return {
//     level: nextLevel,
//     experienceNeed: nextExperienceNeed,
//     experienceToZero: experienceToZero,
//   };
// };

// const deleteQuest = (id) => {
//   setQuests(quests.filter((quest) => quest.id !== id));
// };
