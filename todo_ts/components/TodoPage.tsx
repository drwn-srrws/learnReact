import React from "react";
import { useAppSelector } from "../hooks/redux";
import { IPost } from "../types/types";

import TemplateList from "./TemplateList";
import TemplateListItem, { ItemVariant } from "./TemplateListItem";
const TodoPage = () => {
  const { posts } = useAppSelector((state) => state.PostReducer);

  return (
    <div>
      <TemplateList
        items={posts}
        renderItems={(post: IPost) => (
          <TemplateListItem post={post} variant={ItemVariant.posts} />
        )}
      ></TemplateList>
    </div>
  );
};

export default TodoPage;
