import React, { FC, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addPosts } from "../store/reducers/PostReducer";

interface PostItemProps {
  value: { title: string; text: string };
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  create: ({}) => void;
}
const InputForm: FC = () => {
  const [newPost, setNewPost] = useState({ title: "", text: "" });
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (newPost.text.trim().length) {
      dispatch(addPosts(newPost));
      setNewPost({ title: "", text: "" });
    }
  };
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({ ...newPost, title: e.target.value });
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({ ...newPost, text: e.target.value });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="new todo title"
        value={newPost.title}
        onChange={handleChangeTitle}
      />
      <input
        type="text"
        placeholder="new todo text"
        value={newPost.text}
        onChange={handleChangeText}
      />
      <button onClick={handleClick}>123</button>
    </div>
  );
};

export default InputForm;
