import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { sessionReducer } from "./sessionReducer";
import { ACTION_SESSION_CLEAR } from "../actions/sessionActions";

const appReducer = combineReducers({
  login: loginReducer,
  session: sessionReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ACTION_SESSION_CLEAR) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
