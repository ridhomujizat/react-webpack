import React, { useReducer } from "react";
import ChatContext from "./ChatContext";
import ChatReducer from "./ChatReducer";
import { SET_LOGIN, CLEAR_LOGIN } from "./ChatTypes";

export default function ChateState({ children }) {
  const initialState = {
    login: false,
    token: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(ChatReducer, initialState);

  const setLogin = async (status) => {
    try {
      dispatch({ type: SET_LOGIN, payload: true });
      dispatch({ type: CLEAR_LOGIN });
    } catch (error) {
      console.log(error);
    }
  };

  const clearLogin = async () => {
    dispatch({ type: CLEAR_LOGIN });
  };

  const { login, token } = state;
  return (
    <ChatContext.Provider value={{ login, token, setLogin, clearLogin }}>
      {children}
    </ChatContext.Provider>
  );
}
