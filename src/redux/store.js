import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import themeReucer from "./theme";
import postsReducer from "./posts";
import colorReducer from "./color";

export default configureStore({
  reducer: {
    // user: userReducer,
    // theme: themeReucer,
    posts: postsReducer,
    color: colorReducer,
  },
});
