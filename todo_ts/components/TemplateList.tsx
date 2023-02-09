import React from "react";

import { List } from "@mui/material";

interface ListProps<T>{
  items: T[];
  renderItems: (item: T) => React.ReactNode;
  
}

export default function TemplateList<T>(props:ListProps<T>) {

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {props.items.map(props.renderItems)}
    </List>
  );
};

//export default TemplateList;
