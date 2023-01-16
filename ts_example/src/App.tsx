import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">туду</Link>
        </div>
        <div>
          <Routes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/users/:id" element={<UserItemPage />} /> 
            <Route path="*" element={<div>NotFound</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
