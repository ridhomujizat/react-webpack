import React, { Component } from 'react'
import "./style.css";
import Header from "./component/Header";
import BodyChat from "./layout/BodyChat/BodyChat";
import StickyButton from "./component/StickyButton/StickyButton";
import MessageInput from './component/MessageInput/MessageInput';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typing: "",
            message: [],
            open: false
        }
    }

    componentDidMount(){
      console.log("test")
      this.setState({message: 
        [
          { type: "admin", message: "Hallo ada yang bisa saya bantu?" },
          { type: "me", message: "ada wkwkwkwkwk", time: "12:00" },
        ]
      })
    }
    sendChat = () => {
        const admin = this.state.typing.split("admin:");
        const newMessage = this.state.message;
        if (admin.length === 2) {
          newMessage.push({ type: "admin", message: admin[1] });
        } else {
          newMessage.push({ type: "me", message: this.state.typing });
        }
        this.setState({message: newMessage, typing: ""});
        // message.push(typing)
      };
    render() {
        const {open, message, typing} = this.state
        return (
            <>
              <input className="chat-menu hidden" id="offchat-menu" type="checkbox" />
              <StickyButton onClick={() => this.setState({open: !open})} />
              { (
                <div className={`sticky-chat ${open && "open"}`}>
                  <div className="chat-content">
                    <Header />
                    <BodyChat data={message} />
                  </div>
                  <MessageInput 
                    onSendMessage={() => {
                      this.sendChat()
                    }}
                    onChangeText={(val) => {
                        this.setState({typing: val});
                    }}
                    value={typing}
                  />
                </div>
              )}
            </>
          );
    }
}
