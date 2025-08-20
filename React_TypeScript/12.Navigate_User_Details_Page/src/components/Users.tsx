import React from "react";
import { Link } from "react-router-dom";
import { users } from "./usersData"; // Import shared data
import type  { User } from "./types"; // Shared type

const Users: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">User List</h2>
      <ul className="space-y-2">
        {users.map((user: User) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="text-blue-500 hover:underline"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
