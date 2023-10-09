import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //создаю инишиалСтейт
  quests: [],
  completedQuests: [],
  userStats: {
    experience: 0,
    level: 1,
    experienceNeed: 100,
  },
};

const appSlice = createSlice({
  //потом создаю Слайс
  name: "app",
  initialState,
  reducers: {
    setQuests: (state, action) => {
      state.quests = action.payload;
    },
    setCompletedQuests: (state, action) => {
      state.completedQuests = action.payload;
    },
    setUserStats: (state, action) => {
      state.userStats = action.payload;
    },
  },
});

export const { setQuests, setCompletedQuests, setUserStats } = appSlice.actions;

export default appSlice.reducer;
