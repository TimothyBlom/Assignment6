export const ACTION_SESSION_INIT = "[session] INIT";
export const ACTION_SESSION_SET = "[session] SET";
export const ACTION_SESSION_CLEAR = "[session] CLEAR";
export const ACTION_SESSION_LOGOUT = "[session] LOGOUT";
export const ACTION_SESSION_ADD_TRANSLATION_ATTEMPT =
  "[session] ADD TRANSLATION ATTEMPT";
export const ACTION_SESSION_ADD_TRANSLATION_SUCCESS =
  "[session] ADD TRANSLATION SUCCESS";
export const ACTION_SESSION_ADD_TRANSLATION_ERROR =
  "[session] ADD TRANSLATION ERROR";

export const sessionInitAction = () => ({
  type: ACTION_SESSION_INIT,
});

export const sessionSetAction = (session) => ({
  type: ACTION_SESSION_SET,
  payload: session,
});

export const sessionClearAction = () => ({
  type: ACTION_SESSION_CLEAR,
});

export const sessionLogoutAction = () => ({
  type: ACTION_SESSION_LOGOUT,
});

export const sessionAddTranslationAttemptAction = (credentials) => ({
  type: ACTION_SESSION_ADD_TRANSLATION_ATTEMPT,
  payload: credentials,
});

export const sessionAddTranslationSuccessAction = (profile) => ({
  type: ACTION_SESSION_ADD_TRANSLATION_SUCCESS,
  payload: profile,
});

export const sessionAddTranslationErrorAction = (error) => ({
  type: ACTION_SESSION_ADD_TRANSLATION_ERROR,
  payload: error,
});
