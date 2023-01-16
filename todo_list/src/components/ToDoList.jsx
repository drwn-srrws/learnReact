import ToDoItems from "./ToDoItems";

const ToDoList = ({ posts, remove }) => {
  return (
    <div>
      {posts.map((post) => (
        <ToDoItems remove={remove} post={post} key={post.id} />
      ))}
    </div>
  );
};
export default ToDoList;
