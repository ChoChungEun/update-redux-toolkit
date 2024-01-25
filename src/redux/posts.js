import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const updatePost = createAsyncThunk(
  "UPDATE_POST",
  async (arg, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/${arg.postId}`, arg.updatePost);
      return thunkAPI.fulfillWithValue(arg);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deletePost = createAsyncThunk(
  "DELETE_POST",
  async (arg, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/${arg}`);
      console.log(arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addPosts = createAsyncThunk("ADD_POST", async (arg, thunkAPI) => {
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
    // getPosts
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

    // addPosts
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

    // deletePost
    builder.addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
    });

    // updatePost
    builder.addCase(updatePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.map((post) => {
        console.log(action.payload.updatePost);
        if (post.id === action.payload.postId) {
          return action.payload.updatePost;
        } else {
          return post;
        }
      });
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default postsSlice.reducer;
