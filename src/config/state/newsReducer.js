import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./../../utils/api";
// First, create the thunk
export const fetch_news = createAsyncThunk(
	"news/fetchnews",
	async (obj, thunkAPI) => {
		console.log(thunkAPI);
		console.log("obj", obj);
		const { selectedValue, searchTerm } = obj;
		const response = await instance({
			params: {
				apiKey: "25b2258a87844f43bfcf11b9326eb8ad",
				pageSize: 5,
				page: 1,
				[selectedValue]: searchTerm,
			},
		});
		return response.data.articles;
	},
);

export const fetch_param = createAsyncThunk(
	"news/fetchparam",
	async (search, thunkAPI) => {
		return search;
	},
);
// Then, handle actions in your reducers:
const usersSlice = createSlice({
	name: "news",
	initialState: {
		entities: [],
		loading: false,
		choices: "",
	},
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

		builder.addCase(fetch_param.fulfilled, (state, action) => {
			state.choices = action.payload;
		});
	},
});
export default usersSlice.reducer;
// Later, dispatch the thunk as needed in the app
