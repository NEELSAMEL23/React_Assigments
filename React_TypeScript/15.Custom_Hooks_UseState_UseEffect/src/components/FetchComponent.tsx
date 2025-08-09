import React from "react";
import useFetch from "../hooks/useFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchComponent: React.FC = () => {
  const { data, loading, error } = useFetch<Post>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 border rounded-lg w-80">
      <h3 className="text-xl font-bold">Fetched Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchComponent;
