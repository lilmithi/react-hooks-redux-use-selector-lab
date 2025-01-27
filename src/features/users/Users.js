import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
        Total Users: {users.length}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
