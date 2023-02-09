import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import TodoPage from "../../components/TodoPage";
import MainLayout from "../../layouts/MainLayout";

const MainPage = () => {
  return (
    <>
      <MainLayout>
        <InputForm />
        <TodoPage></TodoPage>
      </MainLayout>
    </>
  );
};

export default MainPage;
