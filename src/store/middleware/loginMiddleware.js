import { AuthAPI } from "../../utils/AuthAPI";
import {
  ACTION_LOGIN_ATTEMPT,
  ACTION_LOGIN_SUCCESS,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions";

export const loginMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type === ACTION_LOGIN_ATTEMPT) {
    AuthAPI.getUser(action.payload)
      .then((profile) => dispatch(loginSuccessAction(profile)))
      .catch((error) => dispatch(loginErrorAction(error.message)));
  }

  if (action.type === ACTION_LOGIN_SUCCESS) {
    dispatch(sessionSetAction(action.payload));
  }
};
