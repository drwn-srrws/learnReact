import React, { FC } from "react";
import { IPost } from "../types/types";
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

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
}
const TodoListItem: FC<PostItemProps> = ({ post, remove }) => {
  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <Tooltip title="Delete">
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => remove(post)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={post.title}
        secondary={
          <React.Fragment>
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
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default TodoListItem;
