const MyButton = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

export default MyButton;
