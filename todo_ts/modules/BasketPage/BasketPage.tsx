import React from "react";

import { useAppSelector } from "@/hooks/redux";
import MainLayout from "@/layouts/MainLayout";
import TemplateListItem from "@/components/List/TemplateListItem";
import TemplateList from "@/components/List/TemplateList";
import { ItemVariant } from "@/types/todo";
import { IPost } from "@/types/types";

const BasketPage = () => {
  const { basket } = useAppSelector((state) => state.PostReducer);

  return (
    <MainLayout>
      <TemplateList
        items={basket}
        renderItems={(post: IPost) => (
          <TemplateListItem post={post} variant={ItemVariant.basket} />
        )}
      ></TemplateList>
    </MainLayout>
  );
};

export default BasketPage;
