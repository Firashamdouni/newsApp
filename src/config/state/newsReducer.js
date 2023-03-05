import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./../../utils/api";
// First, create the thunk
export const fetch_news = createAsyncThunk(
	"news/fetchnews",
	async (_, thunkAPI) => {
		console.log(thunkAPI);
		const response = await instance({
			params: {
				country: "us",
				apiKey: "207353b345c8462a916556424c9eb730",
				pageSize: 5,
				page: 1,
			},
		});
		return response.data.articles;
	},
);

// Then, handle actions in your reducers:
const usersSlice = createSlice({
	name: "news",
	initialState: { entities: [], loading: false },
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetch_news.pending, (state) => {
			// Add user to the state array
			state.loading = true;
		});
		builder.addCase(fetch_news.fulfilled, (state, action) => {
			// Add user to the state array
			state.entities = [action.payload];
			state.loading = false;
		});
	},
});
export default usersSlice.reducer;
// Later, dispatch the thunk as needed in the app
