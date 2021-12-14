import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from './types/types';
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  console.log(users);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch(e) {
      alert(e)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <Card
        width="100px"
        height="100px"
        variant={CardVariant.outlined}
        onClick={(num) => console.log("click ", num)}
      >
        <button>click me</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
