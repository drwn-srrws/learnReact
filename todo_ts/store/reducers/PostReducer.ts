import { IPost } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PostState {
  posts: IPost[];
  basket: IPost[];
}
interface AddPostType {
  text: string;
  title: string;
}

const initialState: PostState = {
  posts: [
    {
      id: 1,
      isCompleted: false,
      date: "2",
      subtitle: "2",
      title: "3",
      selected: false,
    },
  ],
  basket: [],
};

export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<AddPostType>) {
      state.posts.push({
        id: Date.now(),
        isCompleted: false,
        date: Date.now().toLocaleString(),
        subtitle: action.payload.title,
        title: action.payload.text,
        selected: false,
      });
    },
    selectPost(state, action: PayloadAction<IPost>) {
      state.basket = state.basket.map((post) =>
        post.id === action.payload.id
          ? { ...post, isCompleted: !post.isCompleted }
          : post
      );
    },
    removePosts(state, action: PayloadAction<number>) {
      state.posts.map(
        (post) => post.id === action.payload && state.basket.push(post)
      );
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    removeBasketPosts(state) {
      state.basket = state.basket.filter((basket) => basket.selected == true);
    },
    returnRemovePosts(state) {
      state.basket = state.basket.filter((basket) => basket.selected == false);
      state.basket.map(
        (post) => post.selected === true && state.posts.push(post)
      );
    },
  },
});

export default PostSlice.reducer;
export const {
  addPosts,
  removePosts,
  removeBasketPosts,
  returnRemovePosts,
  selectPost,
} = PostSlice.actions;
