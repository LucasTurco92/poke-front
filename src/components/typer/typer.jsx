import React, { useState, useEffect } from "react";
import "./typer.scss";

const Typer = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setIndex(0);
    setTyping(true);
  }, [text]);

  useEffect(() => {
    if (typing) {
      const intervalId = setInterval(() => {
        setIndex(index + 1);
      },80);
      return () => clearInterval(intervalId);
    }
  }, [index, typing, text]);

  useEffect(() => {
    if (index === text?.length) {
      setTyping(false);
    }
  }, [index, text]);

  return (
    <div className="typing-animation">
      <span className="typing-text">{text ? text.slice(0, index):''}</span>
      <span className={`typing-cursor ${typing ? "" : "hidden"}`}>|</span>
    </div>
  );
};

export default Typer;
