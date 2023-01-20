import React, { FC } from "react";

interface PostItemProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const InputForm: FC<PostItemProps> = ({
  value,
  handleChange,
  handleClick,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}></button>
    </div>
  );
};

export default InputForm;
