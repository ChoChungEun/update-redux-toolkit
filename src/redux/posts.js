import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const addPosts = createAsyncThunk("ADD_POSTS", async (arg, thunkAPI) => {
  try {
    const res = await axios.post(BASE_URL, arg);
    const newPost = {
      id: res.data.id,
      userId: res.data[0].userId,
      title: res.data[0].title,
      body: "",
    };
    return thunkAPI.fulfillWithValue(newPost);
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const getPosts = createAsyncThunk("GET_POSTS", async (arg, thunkAPI) => {
  try {
    const res = await axios.get(BASE_URL);
    return thunkAPI.fulfillWithValue(res.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload, ...state.posts];
    });
    builder.addCase(addPosts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default postsSlice.reducer;
