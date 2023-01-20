import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import TodoList from "../../components/TodoList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import MainLayout from "../../layouts/MainLayout";
import { addPosts } from "../../store/reducers/TodoSlice";

const MainPage = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.PostReducer);
  const handleClick = () => {
    if (text.trim().length) {
      dispatch(addPosts(text));
      setText("");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <MainLayout>
        {/* <InputForm
          value={text}
          handleChange={handleChange}
          handleClick={handleClick}
        /> */}
        <TodoList></TodoList>
      </MainLayout>
    </>
  );
};

export default MainPage;
