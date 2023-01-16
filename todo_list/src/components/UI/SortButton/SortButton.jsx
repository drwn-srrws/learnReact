import React from "react";

const SortButton = ({ value, sortPosts }) => {
  const sortBy = { title: "title", body: "body" };
  const getSort = () => {
    for (let v of Object.values(sortBy)) {
      if (v !== value) {
        sortPosts(v);
        return v;
      }
    }
  };
  const truevalue = getSort();
  return <button onClick={getSort}>cортировать по {truevalue}</button>;
};
export default SortButton;
