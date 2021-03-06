export const ACTION_SESSION_INIT = "[session] INIT";
export const ACTION_SESSION_SET = "[session] SET";
export const ACTION_SESSION_CLEAR = "[session] CLEAR";
export const ACTION_SESSION_LOGOUT = "[session] LOGOUT";
export const ACTION_SESSION_UPDATE_TRANSLATIONS_ATTEMPT =
  "[session] UPDATE TRANSLATIONS ATTEMPT";
export const ACTION_SESSION_UPDATE_TRANSLATIONS_SUCCESS =
  "[session] UPDATE TRANSLATIONS SUCCESS";
export const ACTION_SESSION_UPDATE_TRANSLATIONS_ERROR =
  "[session] UPDATE TRANSLATIONS ERROR";

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

export const sessionUpdateTranslationsAttemptAction = (credentials) => ({
  type: ACTION_SESSION_UPDATE_TRANSLATIONS_ATTEMPT,
  payload: credentials,
});

export const sessionUpdateTranslationsSuccessAction = (profile) => ({
  type: ACTION_SESSION_UPDATE_TRANSLATIONS_SUCCESS,
  payload: profile,
});

export const sessionUpdateTranslationsErrorAction = (error) => ({
  type: ACTION_SESSION_UPDATE_TRANSLATIONS_ERROR,
  payload: error,
});
