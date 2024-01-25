import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import themeReucer from "./theme";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReucer,
  },
});
