import React from "react";

const userListName = ({ data }) => {
  const nameOrder = data.slice().sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ul>
      {nameOrder.map((user) => (
        <li key={user.id}>
          {user.name} {user.age}
        </li>
      ))}
    </ul>
  );
};

export default userListName;
