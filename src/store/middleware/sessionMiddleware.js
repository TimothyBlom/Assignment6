import { AuthAPI } from "../../utils/AuthAPI";
import {
  ACTION_SESSION_CLEAR,
  ACTION_SESSION_INIT,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
  ACTION_SESSION_ADD_TRANSLATION_ATTEMPT,
  ACTION_SESSION_ADD_TRANSLATION_SUCCESS,
  sessionClearAction,
  sessionSetAction,
  sessionAddTranslationSuccessAction,
  sessionAddTranslationErrorAction,
} from "../actions/sessionActions";

export const sessionMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === ACTION_SESSION_INIT) {
    const storedSession = localStorage.getItem("user");
    if (!storedSession) {
      return;
    }
    const session = JSON.parse(storedSession);
    dispatch(sessionSetAction(session));
  }

  if (action.type === ACTION_SESSION_SET) {
    localStorage.setItem("user", JSON.stringify(action.payload));
  }

  if (action.type === ACTION_SESSION_CLEAR) {
    localStorage.removeItem("user");
  }

  if (action.type === ACTION_SESSION_LOGOUT) {
    dispatch(sessionClearAction());
  }

  if (action.type === ACTION_SESSION_ADD_TRANSLATION_ATTEMPT) {
    AuthAPI.updateTranslations(action.payload)
      .then((profile) => dispatch(sessionAddTranslationSuccessAction(profile)))
      .catch((error) =>
        dispatch(sessionAddTranslationErrorAction(error.message))
      );
  }

  if (action.type === ACTION_SESSION_ADD_TRANSLATION_SUCCESS) {
    dispatch(sessionSetAction(action.payload));
  }
};
