import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    //  срезы могут быть добавлены здесь
  },
});

export default store;
