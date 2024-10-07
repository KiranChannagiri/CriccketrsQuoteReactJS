import React from "react";
import { useState } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
export default function Card(props) {
  let info = props.info;
  let [count, CountHandler] = useState(0);

  function leftHandler() {
    if (count <=0) {
      CountHandler(info.length-1);
      console.log(count);
    } else {
      CountHandler(count-1);
    }
  }
  function RightHandler() {
    if (count >= info.length-1) {
      CountHandler(0);
      console.log(count);
    } else {
      CountHandler(count+1);
    }
  }
  function supriseMeHandler() {
    let RandomNum=Math.floor(Math.random() * info.length);
    CountHandler(RandomNum);
    console.log(RandomNum);
    
  }
  return (
    <div className="Card">
      <img src={info[count].image} alt="" className="image" />
      <div>
        <h2 className="name">{info[count].name}</h2>
        <p className="role">{info[count].role}</p>
      </div>

      <FaQuoteLeft className="quoteSymbol" />
      <p className="quote"> {info[count].famousQuote} </p>
      <FaQuoteRight className="quoteSymbol" />
      <div className="chevron">
        <FaChevronLeft onClick={leftHandler} />
        <FaChevronRight onClick={RightHandler} />
      </div>
      <div className="supriseMe">
        <button onClick={supriseMeHandler}>Suprise Me</button>
      </div>
    </div>
  );
}
