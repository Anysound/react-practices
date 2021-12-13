import React from "react";
import Card, { CardVariant }  from "./components/Card";
import UserList from "./components/UserList";

const App = () => {
  const arr = []
  const users = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()).then(data => arr.push(data));
  console.log(users);
  
  return (
    <div>
      <Card width="100px" height="100px" variant={CardVariant.outlined} onClick={(num) => console.log('click ', num)}>
        <button>click me</button>
      </Card>
      {/* <UserList users={users} /> */}
    </div>
  );
}

export default App;