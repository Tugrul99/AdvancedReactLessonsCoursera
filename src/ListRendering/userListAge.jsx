import React from "react";

const UserList = ({data}) => {
  const orderedUsers = data.slice().sort((a, b) => a.age - b.age);

  return (
    <ul>
      {orderedUsers.map((user) => (
        <li key={user.id}>
          {user.name} {user.age}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
