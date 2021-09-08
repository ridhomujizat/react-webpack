import { SET_SESSION, CLEAR_SESSION } from "./ChatTypes";
export default function ChatReducer(state, { type, payload }) {
  switch (type) {
    case SET_SESSION:
      return {
        ...state,
        INF_token: payload,
      };
    case CLEAR_SESSION:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
  return <div></div>;
}
