import React, { PropsWithChildren } from "react";

const TodoContextMenuItem: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

export default TodoContextMenuItem;
