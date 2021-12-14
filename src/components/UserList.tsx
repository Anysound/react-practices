import React, { FC, useState } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserList {
  users: IUser[];
}

const UserList: FC<UserList> = ({ users }) => {

  return (
    <div>
      {users.map(user => 
        <UserItem key={user.id} user={user}/>
      )}
    </div>
  )
}

export default UserList;