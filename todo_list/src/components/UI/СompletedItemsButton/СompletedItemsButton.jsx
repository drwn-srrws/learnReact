import React from "react";
//import cl from "./–°ompletedItemsButton.module.css";
const –°ompletedItemsButton = ({ children, isComleted, setIsCompleted }) => {
  const CheckCompleted = () => setIsCompleted(!isComleted);

  return <button onClick={CheckCompleted}>{children}</button>;
};
export default –°ompletedItemsButton;
