import React from "react";
import './bubblechat.style.scss'

export default function BubbleChat({type, from, message, time }) {
  const typeMessage = () => {
    switch (type) {
      case "image":
        return <img src={message} alt="chat-img" />;
      default:
        return <p>{message}</p>;
    }
  };
  return (
    <div className={`wgchat-bubblechat ${type}`}>
      {typeMessage()}
      <span>{time}</span>
    </div>
  );
}
