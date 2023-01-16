import React from "react";
import cl from "./SearchInput.module.css";
const SearchInput = ({ ...props }) => {
  return <input className={cl.SearchInput} {...props} />;
};
export default SearchInput;
