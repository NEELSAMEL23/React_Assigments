import React from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "./usersData"; // Import shared data

// Define user type
interface User {
  id: number;
  name: string;
}

const UserDetails: React.FC = () => {
  // Tell TypeScript that userId will be a string from params
  const { userId } = useParams<{ userId: string }>();

  // Find user by ID, converting userId to number
  const user: User | undefined = users.find(
    (user) => user.id === Number(userId)
  );

  return (
    <div>
      <h2 className="text-xl font-semibold">
        Details of {user ? user.name : "Unknown User"}
      </h2>
      <Link to="/" className="mt-3 text-blue-500 hover:underline">
        Back to Users
      </Link>
    </div>
  );
};

export default UserDetails;
