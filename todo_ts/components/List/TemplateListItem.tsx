import React, { FC, useEffect, useRef, useState } from "react";
import { IPost } from "types/types";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import TodoContextMenu from "@/components/ContextMenu/TodoContextMenu";
import { removePosts, selectPost } from "@/store/reducers/PostReducer";
import { useAppDispatch } from "@/hooks/redux";
import { ItemVariant } from "@/types/todo";
import { useContextMenu } from "@/hooks/useContextMenu";

const deleteIcon = (onClick: () => void) => (
  <Tooltip title="Delete">
    <IconButton edge="end" aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

const rectangleIcon = (isCompleted: boolean, onClick: () => void) => {
  return (
    <Tooltip title="add">
      <IconButton edge="end" aria-label="add" onClick={onClick}>
        {isCompleted ? <div>Completed</div> : <div>Not completed</div>}
      </IconButton>
    </Tooltip>
  );
};

interface TemplateListItemProps {
  post: IPost;
  variant: ItemVariant;
}

const TemplateListItem: FC<TemplateListItemProps> = ({ post, variant }) => {
  const dispatch = useAppDispatch();
  const contextMenuRef = useRef<HTMLUListElement | null>(null);

  const { openContextMenu, closeContextMenu, isContextMenuOpen } =
    useContextMenu({
      contextMenuRef,
    });

  return (
    <>
      <ListItem
        style={{ position: "relative" }}
        alignItems="flex-start"
        sx={{ width: 400 }}
        secondaryAction={
          variant === ItemVariant.posts
            ? deleteIcon(() => dispatch(removePosts(post.id)))
            : rectangleIcon(post.isCompleted, () => {
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
