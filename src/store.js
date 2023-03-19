import { configureStore } from "@reduxjs/toolkit";
import Quran_Reducer from "./components/Quran_Reducer";

export const store = configureStore({
  reducer: {
    Quran_Wisdom: Quran_Reducer,
  },
});
