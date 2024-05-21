import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    videoDetails: videoSlice,
    chat: chatSlice,
  },
});

export default appStore;
