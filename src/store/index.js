import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from "./reducers";
import rootMiddleware from "./middleware";

export default createStore(rootReducer, composeWithDevTools(rootMiddleware));
