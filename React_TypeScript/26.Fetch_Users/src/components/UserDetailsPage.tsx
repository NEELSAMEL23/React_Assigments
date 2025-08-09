// src/components/UserDetailsPage.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import type { RootState } from '../redux/store';
import type { User } from '../redux/usersSlice';

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const user = useSelector((state: RootState) =>
    state.users.users.find((user: User) => user.id === Number(id))
  );

  if (!user)
    return (
      <p className="text-center text-red-500">
        User not found.
      </p>
    );

  return (
    <div className="max-w-xl mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-700">Phone: {user.phone}</p>
      <p className="text-gray-700">
        Address: {user.address.street}, {user.address.city}
      </p>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default UserDetailsPage;
