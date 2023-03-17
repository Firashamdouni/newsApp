// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { auth } from "../../config.js";
// import {
// 	createUserWithEmailAndPassword,
// 	signInWithEmailAndPassword,
// } from "firebase/auth";

// export const create_user = createAsyncThunk(
// 	"news/createuser",
// 	async (data, thunkAPI) => {
// 		try {
// 			console.log("data redux", data);
// 			const userCredential = await createUserWithEmailAndPassword(
// 				auth,
// 				data.email,
// 				data.password,
// 			);
// 			const { uid, email, password } = userCredential.user;
// 			return { uid, email };
// 		} catch (error) {
// 			console.error(error);
// 			throw error;
// 		}
// 	},
// );

// export const sign_user = createAsyncThunk(
// 	"news/createuser",
// 	async (data, thunkAPI) => {
// 		try {
// 			console.log("data redux", data);
// 			const userCredential = await signInWithEmailAndPassword(
// 				auth,
// 				data.email,
// 				data.password,
// 			);
// 			const { uid, email, password } = userCredential.user;
// 			return { uid, email, password };
// 		} catch (error) {
// 			console.error(error);
// 			throw error;
// 		}
// 	},
// );

// export const current_user = createAsyncThunk(
// 	"news/currentuser",
// 	async (user, thunkAPI) => {
// 		try {
// 			return user;
// 		} catch (error) {
// 			console.error(error);
// 			throw error;
// 		}
// 	},
// );
// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
// 	name: "users",
// 	initialState: {
// 		users: [],
// 		currentuser: [],
// 		loading: false,
// 	},
// 	reducers: {
// 		// standard reducer logic, with auto-generated action types per reducer
// 	},
// 	extraReducers: (builder) => {
// 		// Add reducers for additional action types here, and handle loading state as needed
// 		builder.addCase(create_user.pending, (state) => {
// 			// Add user to the state array
// 			state.loading = true;
// 		});
// 		// builder.addCase(create_user.fulfilled, (state, action) => {
// 		// 	// Add user to the state array
// 		// 	console.log("user", action.payload);
// 		// 	state.users = [action.payload, ...state.users];
// 		// 	state.currentuser = action.payload;
// 		// 	state.loading = false;
// 		// });

// 		builder.addCase(sign_user.fulfilled, (state, action) => {
// 			// Add user to the state array
// 			console.log("loggedin", action.payload);
// 			state.currentuser = action.payload;
// 			state.loading = false;
// 		});
// 	},
// });
// export default usersSlice.reducer;
// // Later, dispatch the thunk as needed in the app
