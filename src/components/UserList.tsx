import React, { FC, useState } from "react";
import { IUser } from "../types/types";

interface UserList {
  users: IUser[];
}

const UserList: FC<UserList> = ({ users }) => {

  return (
    <div>
      {users.map(user => 
        <div key={user.id} style={{padding: 15, border: '1px solid green'}}>{user.id} {user.name}</div>  
      )}
    </div>
  )
}

export default UserList;