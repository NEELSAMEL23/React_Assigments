import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import UserDetails from "./components/UserDetail";

const App: React.FC = () => {
  return (
    <Router>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
