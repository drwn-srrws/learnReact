import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import SearchInput from "./UI/Input/SearchInput";
const PostForm = ({ create }) => {
  const [post, setPost] = useState({ body: "", title: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ body: "", title: "" });
  };
  return (
    <form>
      <SearchInput
        value={post.body}
        type="text"
        placeholder="Название поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      ></SearchInput>
      <SearchInput
        value={post.title}
        type="text"
        placeholder="Описание поста"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      ></SearchInput>

      <MyButton onClick={addNewPost}>Create +</MyButton>
    </form>
  );
};
export default PostForm;
