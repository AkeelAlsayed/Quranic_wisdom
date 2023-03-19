// import { createSlice } from "@reduxjs/toolkit";
// // import data from "../chart-data/chart-data.json";
// // const APICallSimulator = [1, 3.5, 6, 6, 8, 9, 7];
// const initialState = {
//   Api: API,
// };
// export const Quran_Reducer = createSlice({
//   name: "Chart",
//   initialState,
//   reducers: {},
// });
// export const {} = Quran_Reducer.actions;
// export default Quran_Reducer.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { fetchQuranData } from "./quranAPI";

const initialState = {
  quranData: null,
  loading: false,
  error: null,
};

export const quranSlice = createSlice({
  name: "quran",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setQuranData: (state, action) => {
      state.quranData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setQuranData, setError } = quranSlice.actions;

export const fetchQuranDataAsync =
  (Id, selectedAudioEdition) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const data = await fetchQuranData(Id, selectedAudioEdition);
      console.log(data);
      dispatch(setQuranData(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

export default quranSlice.reducer;
