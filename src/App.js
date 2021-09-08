import React, { Component } from "react";
import "./style.css";
import Header from "./component/Header";
import BodyChat from "./layout/BodyChat/BodyChat";
import StickyButton from "./component/StickyButton/StickyButton";
import MessageInput from "./component/MessageInput/MessageInput";
import LoginChat from "./layout/LoginChat/Login";
import ChatContex from "./context/ChatContext";

export default class App extends Component {
  static contextType = ChatContex;
  constructor(props) {
    super(props);
    this.state = {
      typing: "",
      message: [],
      open: false,
    };
  }

  componentDidMount() {
    console.log(this.context)
    this.setState({
      message: [
        { type: "admin", message: "Hallo ada yang bisa saya bantu?" },
        { type: "me", message: "ada wkwkwkwkwk", time: "12:00" },
      ],
    });
  }
  sendChat = () => {
    const admin = this.state.typing.split("admin:");
    const newMessage = this.state.message;
    if (admin.length === 2) {
      newMessage.push({ type: "admin", message: admin[1] });
    } else {
      newMessage.push({ type: "me", message: this.state.typing });
    }
    this.setState({ message: newMessage, typing: "" });
    // message.push(typing)
  };
  render() {
    const { open, message, typing, login } = this.state;
    return (
      <>
        <input className="chat-menu hidden" id="offchat-menu" type="checkbox" />
        <StickyButton onClick={() => this.setState({ open: !open })} />
        <div className={`sticky-chat ${open && "open"}`}>
          <div className="chat-content">
              <Header />
              {this.context.login ? (
                <>
                  <BodyChat data={message} />
                  <MessageInput
                    onSendMessage={() => {
                      this.sendChat();
                    }}
                    onChangeText={(val) => {
                      this.setState({ typing: val });
                    }}
                    value={typing}
                  />
                </>
              ) : (
                <LoginChat />
              )}
          </div>
        </div>
      </>
    );
  }
}
