import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

type UserItemPageParams = {
  id: string;
};
const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);
  async function fetchUser() {
    try {
      const responce = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(responce.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={ ()=>navigate("/users")}>back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
    </div>
  );
};
export default UserItemPage;
