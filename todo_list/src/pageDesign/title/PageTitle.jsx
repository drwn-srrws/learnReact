import cl from "./PageTitle.module.css";

const PageTitle = ({ firstPart, secondPart }) => {
  const firstElementStyle = [cl.PageTitle, cl.PageTitleFirst];
  const secondElementStyle = [cl.PageTitle, cl.PageTitleSecond];

  return (
    <div className={cl.content}>
      <div className={firstElementStyle.join(" ")}>{firstPart}</div>
      <div className={secondElementStyle.join(" ")}>{secondPart}</div>
    </div>
  );
};
export default PageTitle;
