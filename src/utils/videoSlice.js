import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videoList: [],
    searchData: {},
  },

  reducers: {
    setVideoDetails: (state, action) => {
      state.videoList = action.payload;
    },
    cacheResults: (state, action) => {
      state.searchData = { ...state.searchData, ...action.payload };
    },
  },
});

export const { setVideoDetails, cacheResults } = videoSlice.actions;
export default videoSlice.reducer;
