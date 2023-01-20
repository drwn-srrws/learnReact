import { IPost } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostState {
  posts: IPost[];
}

const initialState: PostState = {
  posts: [],
};

export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<string>) {
      state.posts.push({
        id: Date.now(),
        iscompleted: false,
        date: Date.now().toLocaleString(),
        subtitle: action.payload,
        title: action.payload,
      });
    },
  },
});

export default PostSlice.reducer;
export const {addPosts} = PostSlice.actions;