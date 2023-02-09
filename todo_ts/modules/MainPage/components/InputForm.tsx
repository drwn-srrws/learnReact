import React, { ChangeEvent, useState } from "react";
import { Button, styled, TextField } from "@mui/material";

import { useAppDispatch } from "@/hooks/redux";
import { addPosts } from "@/store/reducers/PostReducer";

const EMPTY_POST = {
  title: "",
  text: "",
};

const InputForm = () => {
  const dispatch = useAppDispatch();

  const [newPost, setNewPost] = useState(EMPTY_POST);

  const handleClick = () => {
    if (newPost.text.trim().length && newPost.title.trim().length) {
      dispatch(addPosts(newPost));
      setNewPost(EMPTY_POST);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setNewPost({ ...newPost, title: e.target.value });

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setNewPost({ ...newPost, text: e.target.value });

  return (
    <div>
      <TextField
        type="text"
        placeholder="New todo title"
        value={newPost.title}
        onChange={handleChangeTitle}
      />
      <TextField
        type="text"
        placeholder="new todo text"
        value={newPost.text}
        onChange={handleChangeText}
      />
      <StyledButton onClick={handleClick}>123</StyledButton>
    </div>
  );
};

const StyledButton = styled(Button)({
  padding: "20px",
  color: "black",
});

export default InputForm;
