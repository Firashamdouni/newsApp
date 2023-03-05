import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsReducer";

const store = configureStore({
	reducer: {
		news: newsReducer,
	},
});

export default store;
