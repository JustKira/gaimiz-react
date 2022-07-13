import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import imageReducer from "./imageReducers"
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import eventReducer from "./eventReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  events : eventReducer,
  form: formReducer,
  images : imageReducer,
});

export default persistReducer(persistConfig, rootReducer);