import React from "react";
import "./messageinput.style.scss"

export default function MessageInput(prop) {
  return (
    <div className="wgChat-messageinput">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          prop.onSendMessage(e.target);
        }}
      >
        <input
          className="input-sendchat"
          type="text"
          value={prop.value}
          placeholder="Ketik Pesan..."
          onChange={(e) => {
            e.preventDefault();
            prop.onChangeText(e.target.value);
          }}
        />
        <button className="button-sendchat" type="submit">
          <svg viewBox="0 0 32 32">
            <path d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
