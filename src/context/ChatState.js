import React, { useReducer } from "react";
import ChatContext from "./ChatContext";
import ChatReducer from "./ChatReducer";
import { SET_SESSION, CLEAR_SESSION } from "./ChatTypes";
import http from "../utils/https";

export default function ChateState({ children }) {
  const initialState = {
    login: false,
    INF_token: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(ChatReducer, initialState);

  const createSession = async (postData) => {
    try {
      const data = JSON.stringify(postData);
      const response = await http().post("/createSession", data);
      if (!response.data?.error) {
        localStorage.setItem("INF_token", response.data?.session);
        localStorage.setItem("INF_data", data);
        dispatch({ type: SET_SESSION, payload: response.data?.session });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearLogin = async () => {
    dispatch({ type: CLEAR_SESSION });
  };

  const { login, INF_token } = state;
  return (
    <ChatContext.Provider value={{ login, INF_token, createSession, clearLogin }}>
      {children}
    </ChatContext.Provider>
  );
}
