import React, { useState } from "react";
import { IPost } from "../types/types";

import { List } from "@mui/material";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: "123", subtitle: "123", date: "123", iscompleted: true },
    { id: 2, title: "123", subtitle: "123", date: "123", iscompleted: true },
  ]);
  const remove = (post:IPost) => {
    setPosts(posts.filter(p=>p.id!=post.id))
  }
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
          {posts.map(post=> <TodoListItem remove ={remove} key={post.id} post={post}></TodoListItem>)}
    </List>
  );
};

export default TodoList;
