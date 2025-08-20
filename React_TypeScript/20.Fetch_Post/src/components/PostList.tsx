// src/components/PostList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import type { RootState, AppDispatch } from "../redux/store"; // Adjust the path as needed

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, posts, error } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl font-semibold text-red-500">
        Failed to load posts. Please try again.
      </div>
    );
  }

  return (
    <div className="p-4">
      {posts.map((post: Post) => (
        <div key={post.id} className="bg-white p-4 mb-4 shadow-md rounded-lg">
          <h2 className="text-xl font-bold text-blue-600">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
