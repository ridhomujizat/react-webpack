import React from "react";
import "./bodychat.styles.scss";
import BubbleChat from "../../component/BubbleChat/BubbleChat";

export default function BodyChat({ data }) {
  const messagesEndRef = React.useRef(null);

  React.useEffect(() => {
    scrollToButtom();
  });

  const scrollToButtom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="wgchat-body">
      <div className="wgchat-bubblechat-wrapper">
        <div className={`wgchat-bubblechat me`}>
          <img
            src="https://prod-storage.on5.co.id/on5/on5/a26d15d8571c65e477711e0dbfb24474.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=langgenk%2F20210907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210907T041814Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0e30bfcaf0ddf5d753c1578ce1338eed7bcd30c42fb404e723f812da0b22cc92"
            alt="chat-img"
          />
          <span>13.20</span>
        </div>
        {data.map((val, index) => (
          <BubbleChat
            key={index}
            message={val.message}
            type={val.type}
            time={val.time}
          />
        ))}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}
