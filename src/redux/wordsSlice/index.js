import { data } from "../words";

const { createSlice } = require("@reduxjs/toolkit");



const getWords = (data) => {
  let shuffled = [...data].sort(() => Math.random() - 0.5);

  let resized = shuffled.slice(0, 50);

  return resized.map((item) => ({ ...item, status: "" }));
};

const wordsSlice = createSlice({
  name: "words",
  initialState: {
    items: getWords(data.words),
    language: "turkish",
    correctCounter:0,
    inCorrectCounter:0,
    counter:0,
    timeLeft:60,
  },
  reducers: {
    setLanguage: (state,action) => {
        state.language = action.payload
    },
    setCorrectCounter: (state) => {
        state.correctCounter += 1;
    },
    setInCorrectCounter: (state) => {
        state.inCorrectCounter +=1;
    },

    setStatus: (state,action) => {

        const item = state.items.find((item) => item.id === action.payload.id)

        item.status = action.payload.status
    },
    getWordsAgain: (state) => {
        state.items = getWords(data.words)
    },
    setTimeLeft: (state) => {
      state.timeLeft -= 1;
    },
  },
});

export const {setLanguage, setCorrectCounter, setStatus,setInCorrectCounter,getWordsAgain,setTimeLeft} = wordsSlice.actions;

export default wordsSlice.reducer;
