import React, { useEffect } from "react";
import TodoContextMenuItem from "components/ContextMenu/TodoContextMenuItem";

interface TodoContextMenuProps {
  onClose: () => void;
}

// eslint-disable-next-line react/display-name
const TodoContextMenu = React.forwardRef<
  HTMLUListElement,
  TodoContextMenuProps
>(({ onClose }, ref) => {
  useEffect(() => {
    document.addEventListener("mousedown", onClose);
    return () => {
      document.removeEventListener("mousedown", onClose);
    };
  }, [onClose]);

  const menuItems = [
    {
      label: "Add to Your Library",
    },
    {
      label: "Share",
    },
    {
      label: "About recommendations",
    },
    {
      label: "Open in Desktop app",
    },
  ];

  return (
    <ul ref={ref} style={{ position: "fixed" }}>
      {menuItems.map(({ label }) => (
        <TodoContextMenuItem key={label}>{label}</TodoContextMenuItem>
      ))}
    </ul>
  );
});

export default TodoContextMenu;
