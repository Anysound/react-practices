import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

export const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  console.log(users);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <List
      items={users}
      renderItem={(user) => <UserItem user={user} key={user.id} />}
    />
  );
};
