import React, { FC } from "react";

interface PostItemProps {
  value: { title: string; text: string };
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const InputForm: FC<PostItemProps> = ({
  value,
  handleChangeTitle,
  handleChangeText,
  handleClick,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="new todo title"
        value={value.title}
        onChange={handleChangeTitle}
      />
      <input
        type="text"
        placeholder="new todo text"
        value={value.text}
        onChange={handleChangeText}
      />
      <button onClick={handleClick}>123</button>
    </div>
  );
};

export default InputForm;
