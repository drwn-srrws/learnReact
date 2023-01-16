import { useState } from "react";
import СompletedItemsButton from "./UI/СompletedItemsButton/СompletedItemsButton";
import cl from "./components.module.css";
import ButtonDelete from "./UI/ButtonDelete/ButtonDelete";
const ToDoItems = ({ remove, post }) => {
  const [isComleted, setIsCompleted] = useState(post.isComleted);
  const rootClasses = [];
  if (isComleted) {
    rootClasses.push(cl.isComleted);
  }

  return (
    <div className="post">
      <СompletedItemsButton
        isComleted={isComleted}
        setIsCompleted={setIsCompleted}
      >
        123
      </СompletedItemsButton>
      <div>
        <div className={rootClasses}>{post.title}</div>
        <div className={rootClasses}>{post.body}</div>
      </div>
      <ButtonDelete
        onClick={() => {
          remove(post);
        }}
      >
        del
      </ButtonDelete>
    </div>
  );
};
export default ToDoItems;
