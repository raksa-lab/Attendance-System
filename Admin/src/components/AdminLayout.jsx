// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddUser from "./components/AddUser";
import Login from "./components/Login";
import UserDetail from "./components/UserDetail";
import DeleteUser from "./components/DeleteUser";
import OverviewAdmin from "./components/OverviewAdmin";
import UpdateUser from "./components/UpdateUser";

// New component for the admin dashboard layout
const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Outlet /> {/* This will render the component for the nested route */}
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* The Login page is a standalone route at the base path */}
        <Route path="/" element={<Login />} />

        {/* All admin pages will be rendered within the AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="overview" element={<OverviewAdmin />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="user-detail" element={<UserDetail />} />
          <Route path="update-user" element={<UpdateUser />} />
          <Route path="delete-user" element={<DeleteUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;