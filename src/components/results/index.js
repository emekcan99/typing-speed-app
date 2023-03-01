import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

function Results() {
  const correctCounter = useSelector((state) => state.words.correctCounter);
  const inCorrectCounter = useSelector((state) => state.words.inCorrectCounter);
  const timeLeft = useSelector((state) => state.words.timeLeft);
  let accurancyRate =
    (correctCounter / (correctCounter + inCorrectCounter)) * 100;
  return (
    <div>
      {timeLeft > 0 ? (
        <Card className="secondsCard">
          <h1 className="seconds">{timeLeft} seconds</h1>
        </Card>
      ) : (
        <Card className="results" title={`${accurancyRate}%`}>
          <span className="informations">
            correct words = {correctCounter} <br></br> incorrect words ={" "}
            {inCorrectCounter}
          </span>
        </Card>
      )}
    </div>
  );
}

export default Results;
