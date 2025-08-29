// import { useState } from "react";
"use client"
function UserDetail() {
  const user = {
    firstName: "Nov",
    lastName: "Raksa",
    gender: "Male",
    phone: "093278159",
    university: "Royal University",
    faculty: "Engineering",
    department: "Information Technology Engineering",
    year: 2,
    points: 12,
    events: [
      { name: "RYL", location: "Rupp", date: "10 Apr 2025" },
      { name: "Cyber", location: "Aupp", date: "20 Apr 2025" },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-6">🌸 DashBoard</h1>
          <nav className="space-y-3">
            <p className="text-gray-500 text-sm">Organizer</p>
            <ul className="space-y-2">
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Overview</button></li>
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Create Event</button></li>
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">View Event Detail</button></li>
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Update</button></li>
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Delete</button></li>
            </ul>

            <p className="text-gray-500 text-sm mt-6">User</p>
            <ul className="space-y-2">
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Overview</button></li>
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Add User</button></li>
              <li><button className="w-full text-left py-2 px-3 bg-gray-200 rounded">User Detail</button></li>
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Update User</button></li>
              <li><button className="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Delete User</button></li>
            </ul>

            <p className="text-gray-500 text-sm mt-6">Admin</p>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold">{user.firstName} <br /> {user.lastName}</h2>
          <div className="bg-indigo-900 text-white px-4 py-2 rounded-lg shadow">
            <p>Points</p>
            <p className="text-xl font-bold">{user.points}</p>
          </div>
        </div>

        {/* User Form */}
        <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">First Name</label>
            <input type="text" value={user.firstName} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Last Name</label>
            <input type="text" value={user.lastName} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Gender</label>
            <input type="text" value={user.gender} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input type="text" value={user.phone} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">University</label>
            <input type="text" value={user.university} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Faculty</label>
            <input type="text" value={user.faculty} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Departments</label>
            <input type="text" value={user.department} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Year</label>
            <input type="text" value={user.year} disabled className="w-full mt-1 p-2 border rounded bg-gray-50" />
          </div>
        </div>

        {/* Events */}
        <div className="bg-white rounded-2xl shadow">
          <div className="bg-indigo-900 text-white text-center py-2 rounded-t-2xl font-semibold">Total Event</div>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b text-gray-700">
                <th className="p-3">Name Event</th>
                <th className="p-3">Location</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {user.events.map((e, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="p-3">{e.name}</td>
                  <td className="p-3">{e.location}</td>
                  <td className="p-3">[{e.date}]</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-800">Back</button>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
