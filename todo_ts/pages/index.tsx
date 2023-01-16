import React, { useState } from "react";
import ContextMenu from "../components/ContextMenu";
import TodoList from "../components/TodoList";
import { IPost } from "../types/types";

const index = () => {
  return <><TodoList></TodoList>
  <ContextMenu/>
  </>;
};

export default index;
