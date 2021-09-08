import { SET_LOGIN, CLEAR_LOGIN } from "./ChatTypes";
export default function ChatReducer(state, { type, payload }) {
  switch (type) {
    case SET_LOGIN:
      return {
        ...state,
        login: payload,
      };
    case SET_LOGIN:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
  return <div></div>;
}
