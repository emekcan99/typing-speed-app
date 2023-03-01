import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/wordsSlice";
import { Card, Col } from "antd";
import "./styles.css"

function Words() {
  const dispatch = useDispatch();

  
  const language = useSelector((state) => state.words.language);
  
  const data = useSelector((state) => state.words.items);
  



  return (
    <div>
      
      <select onChange={(e) => dispatch(setLanguage(e.target.value))} className="select">
        <option value="turkish">turkish</option>
        <option value="english">english</option>
      </select>
      <Card className="words">
        {language === "turkish"
          ? data.map((item, i) => (
              <span key={i} className={`word-${item.status}`}>
                {item.turkish}{" "}
              </span>
            ))
          : data.map((item, i) => (
              <span key={i} className={`word-${item.status}`}>
                {item.english}{" "}
              </span>
            ))}
      </Card>
      
    </div>
  );
}

export default Words;
