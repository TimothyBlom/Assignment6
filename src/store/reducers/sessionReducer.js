import {
  ACTION_SESSION_CLEAR,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
  ACTION_SESSION_UPDATE_TRANSLATIONS_ATTEMPT,
  ACTION_SESSION_UPDATE_TRANSLATIONS_SUCCESS,
  ACTION_SESSION_UPDATE_TRANSLATIONS_ERROR,
} from "../actions/sessionActions";

const initialState = {
  id: "",
  username: "",
  translations: [],
  loggedIn: false,
  addTranslationAttempting: false,
  addTranslationError: "",
};

export const sessionReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_SESSION_SET:
      return {
        ...action.payload,
        loggedIn: true,
      };
    case ACTION_SESSION_CLEAR:
      return {
        ...initialState,
      };
    case ACTION_SESSION_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    case ACTION_SESSION_UPDATE_TRANSLATIONS_ATTEMPT:
      return {
        ...state,
        addTranslationAttempting: true,
        addTranslationError: "",
      };
    case ACTION_SESSION_UPDATE_TRANSLATIONS_SUCCESS:
      return {
        ...state,
      };
    case ACTION_SESSION_UPDATE_TRANSLATIONS_ERROR:
      return {
        ...state,
        addTranslationAttempting: false,
        addTranslationError: action.payload,
      };
    default:
      return state;
  }
};
