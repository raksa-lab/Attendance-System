// src/components/Sidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-sm h-screen fixed top-0 left-0 flex flex-col">
      <div className="flex items-center justify-center p-6">
        <div className="flex items-center gap-2">
          {/* <img src={ReactLogo} alt="Dashboard logo" className="w-8 h-8"/> */}
          <span className="text-xl font-semibold text-gray-900">Dashboard</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Organizer Section */}
        <div className="space-y-2">
          <h3 className="uppercase text-xs font-semibold text-gray-500">Organizer</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/admin/overview"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/admin/overview" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Overview
              </Link>
            </li>
          </ul>
        </div>

        {/* User Section */}
        <div className="space-y-2">
          <h3 className="uppercase text-xs font-semibold text-gray-500">User</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/admin/overview"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/admin/overview" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/admin/add-user"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/admin/add-user" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Add User
              </Link>
            </li>
            <li>
              <Link
                to="/admin/user-detail"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/admin/user-detail" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                User Detail
              </Link>
            </li>
            <li>
              <Link
                to="/admin/update-user"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/admin/update-user" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Update User
              </Link>
            </li>
            <li>
              <Link
                to="/admin/delete-user"
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === "/admin/delete-user" ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Delete User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="mt-auto p-6">
        <h3 className="font-semibold text-gray-900">Admin</h3>
      </div>
    </aside>
  );
}
