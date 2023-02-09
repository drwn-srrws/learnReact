import React, {
  useEffect,
  forwardRef,
  ReactNode,
  PropsWithChildren,
} from "react";
import cl from "../components/TodoContextMenuItems.module.css";

interface itemProps extends PropsWithChildren {
  label: string;
}
// eslint-disable-next-line react/display-name
const TodoContextMenuItem: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

export default TodoContextMenuItem;
