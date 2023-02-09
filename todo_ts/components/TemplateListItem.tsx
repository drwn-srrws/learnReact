import React, { FC, useEffect, useRef, useState } from "react";
import { IPost } from "../types/types";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import { removePosts, selectPost } from "../store/reducers/PostReducer";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useAppDispatch } from "../hooks/redux";
import TodoContextMenu from "./TodoContextMenu";
import { log } from "console";

export enum ItemVariant {
  posts = "posts",
  basket = "basket",
}

interface ItemProps {
  post: IPost;
  variant: ItemVariant;
}

const clickPosition: { x: null | number; y: null | number } = {
  x: null,
  y: null,
};

const deleteIcon = (onClick: () => void) => (
  <Tooltip title="Delete">
    <IconButton edge="end" aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);
interface rectangleIconProps {
  getSelected: boolean;
}
const rectangleIcon = (iscompleted: boolean, onClick: () => void) => {
  console.log(iscompleted);
  return (
    <Tooltip title="add">
      <IconButton edge="end" aria-label="add" onClick={onClick}>
        {iscompleted == false ? <div>123</div> : <div>321</div>}
      </IconButton>
    </Tooltip>
  );
};

const TemplateListItem: FC<ItemProps> = ({ post, variant }) => {
  const dispatch = useAppDispatch();

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef<HTMLUListElement | null>(null);

  function updateContextMenuPosition() {
    if (contextMenuRef.current) {
      console.log(clickPosition.x, "click");
      contextMenuRef.current.style.left = `${clickPosition.x}px`;
      contextMenuRef.current.style.top = `${clickPosition.y}px`;
    }
  }
  useEffect(() => {
    if (isContextMenuOpen) {
      updateContextMenuPosition();
    }
  });
  function openContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;
    setIsContextMenuOpen(true);
  }
  function closeContextMenu() {
    setIsContextMenuOpen(false);
  }

  return (
    <>
      {" "}
      <ListItem
        style={{ position: "relative" }}
        alignItems="flex-start"
        sx={{ width: 400 }}
        secondaryAction={
          variant === ItemVariant.posts
            ? deleteIcon(() => dispatch(removePosts(post.id)))
            : rectangleIcon(post.iscompleted, () => {
                dispatch(selectPost(post));
              })
        }
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          onContextMenu={openContextMenu}
          primary={post.title}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.subtitle}
              </Typography>
              <Typography
                sx={{ display: "block" }}
                component="span"
                textAlign="right"
                variant="subtitle2"
                color="text.secondary"
              >
                {post.date}
              </Typography>
            </>
          }
        />
        {isContextMenuOpen && (
          <TodoContextMenu ref={contextMenuRef} onClose={closeContextMenu} />
        )}
      </ListItem>
    </>
  );
};

export default TemplateListItem;
