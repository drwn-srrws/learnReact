import React from "react";
//import cl from "./СompletedItemsButton.module.css";
const СompletedItemsButton = ({ children, isComleted, setIsCompleted }) => {
  const CheckCompleted = () => setIsCompleted(!isComleted);

  return <button onClick={CheckCompleted}>{children}</button>;
};
export default СompletedItemsButton;
