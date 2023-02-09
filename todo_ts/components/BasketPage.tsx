import React from "react";
import { useAppSelector } from "../hooks/redux";
import { IPost } from "../types/types";
import TemplateList from "./TemplateList";
import TemplateListItem, { ItemVariant } from "./TemplateListItem";
const BasketPage = () => {
  const { basket } = useAppSelector((state) => state.PostReducer);

  return (
    <div>
      <TemplateList
        items={basket}
        renderItems={(post: IPost) => (
          <TemplateListItem post={post} variant={ItemVariant.basket} />
        )}
      ></TemplateList>
    </div>
  );
};

export default BasketPage;
