// src/components/OverviewAdmin.jsx

import React, { useState } from "react";
// Don't include the sidebar here. It belongs in App.jsx.

export default function OverviewAdmin() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Nov Raksa",
      gender: "Male",
      phone: "(225) 555-0118",
      university: "Royal university of Phnom penh",
      points: 12,
      major: "ITE",
    },
    {
      id: 2,
      name: "Floyd Miles",
      gender: "Male",
      phone: "(205) 555-0100",
      university: "Royal university of Phnom penh",
      points: 10,
      major: "DSE",
    },
    {
      id: 3,
      name: "Ronald Richards",
      gender: "Female",
      phone: "(302) 555-0107",
      university: "ronald@adobe.com",
      points: 9,
      major: "CS",
    },
    {
      id: 4,
      name: "Marvin McKinney",
      gender: "Male",
      phone: "(252) 555-0126",
      university: "marvin@tesla.com",
      points: 8,
      major: "TEE",
    },
    {
      id: 5,
      name: "Jerome Bell",
      gender: "Female",
      phone: "(629) 555-0129",
      university: "jerome@google.com",
      points: 5,
      major: "DEE",
    },
    {
      id: 6,
      name: "Kathryn Murphy",
      gender: "Female",
      phone: "(406) 555-0120",
      university: "kathryn@microsoft.com",
      points: 3,
      major: "DSE",
    },
    {
      id: 7,
      name: "Jacob Jones",
      gender: "Male",
      phone: "(208) 555-0112",
      university: "jacob@yahoo.com",
      points: 2,
      major: "BIO",
    },
    {
      id: 8,
      name: "Kristin Watson",
      gender: "Female",
      phone: "(704) 555-0127",
      university: "kristin@facebook.com",
      points: 1,
      major: "ITE",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-8">
      {/* Overview Cards Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg text-white">
          <div className="text-3xl font-bold mb-1">452</div>
          <div className="text-indigo-100">Total Guest</div>
          <div className="text-xs text-indigo-200 mt-1">↗ 10% Less than yesterday</div>
        </div>

        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6 rounded-lg text-white">
          <div className="text-3xl font-bold mb-1">360</div>
          <div className="text-indigo-100">Online Register</div>
          <div className="text-xs text-indigo-200 mt-1">↗ 10% Less than yesterday</div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg text-white">
          <div className="text-3xl font-bold mb-1">62</div>
          <div className="text-indigo-100">Registration Now</div>
          <div className="text-xs text-indigo-200 mt-1">↗ 1% Increase than yesterday</div>
        </div>

        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6 rounded-lg text-white">
          <div className="text-3xl font-bold mb-1">6</div>
          <div className="text-indigo-100">Total Event</div>
          <div className="text-xs text-indigo-200 mt-1">↗ 10% Less than yesterday</div>
        </div>
      </div>

      {/* User Table Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Top Points</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Major</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.university}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.points}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.major}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}