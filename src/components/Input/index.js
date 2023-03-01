import React, { useEffect, useState } from "react";
import {  Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getWordsAgain,
  setCorrectCounter,
  setInCorrectCounter,
  setStatus,
  setTimeLeft,
} from "../../redux/wordsSlice";

import "./styles.css"

function InputWord() {
  
  const [input, setInput] = useState("");
  let [index, setIndex] = useState(0);

  let [timerStart, setTtimerStart] = useState(false);

  const words = useSelector((state) => state.words.items);

  const correctCounter = useSelector((state) => state.words.correctCounter);
  const language = useSelector((state) => state.words.language);
  const timeLeft = useSelector((state) => state.words.timeLeft);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timerStart) setTimeout(() => dispatch(setTimeLeft()), 1000);
    if (timeLeft === 1) setTtimerStart(false);
  }, [timerStart, timeLeft, dispatch]);

  const onChangeHandler = (e) => {
    setTtimerStart(true);
    dispatch(setStatus({ id: words[index].id, status: "this" }));
    
    if (e.target.value.includes(" ")) {
      setIndex(index + 1);
      
      let currWord =
        language === "turkish" ? words[index].turkish : words[index].english;

      
      setInput("");

      

      if (currWord.includes(input) && currWord.length === input.length) {
        dispatch(setCorrectCounter());
        dispatch(setStatus({ id: words[index].id, status: "correct" }));
        console.log(correctCounter);
      } else if (
        !currWord.includes(input) ||
        currWord.length !== input.length
      ) {
        dispatch(setInCorrectCounter());
        dispatch(setStatus({ id: words[index].id, status: "incorrect" }));
      }
      console.log(currWord);
     
    } else {
      console.log(words);
      setInput(e.target.value);
    }
    if (index >= 49) {
      dispatch(getWordsAgain());
      setIndex(0);
    }
    console.log(index);
  };

  return (
    <div>
  
      <Input onChange={onChangeHandler} value={input} className="input"></Input>
    </div>
  );
}

export default InputWord;
