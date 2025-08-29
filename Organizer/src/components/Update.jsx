import { useState } from "react";
import { Link } from "react-router-dom";

export default function Update() {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    { name: "Nicc Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Rupp" },
    { name: "Ryl Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "ITC" },
    { name: "Ckcc Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Rupp" },
    { name: "Eday Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Rupp" },
    { name: "ITC Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "ITC" },
    { name: "Camx Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Khos pech" },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center py-8">
      <div className="bg-white rounded-lg shadow-lg flex w-[1100px] min-h-[700px] relative">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r rounded-l-lg flex flex-col justify-between">
          <div>
            <div className="p-6 flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-gray-900">DashBoard</span>
            </div>
            <nav className="space-y-2 px-2">
              <Link to="/Overview" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Overview icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
                </svg>
                Overview
              </Link>
              <Link to="/Createvent" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Create Event icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Create Event
              </Link>
              <Link to="/VieweventDetail" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* View Event Detail icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Event Detail
              </Link>
              <Link to="/Update" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium shadow">
                {/* Update icon */}
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2H7v-2l6-6z" />
                </svg>
                Update
              </Link>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Delete icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
                Delete
              </a>
            </nav>
          </div>
          <div className="p-6">
            <span className="text-gray-600 font-medium">Organizier</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-500">Update</h1>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <svg className="w-5 h-5 inline-block mr-2 -mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Export
            </button>
          </div>

          {/* Events Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">List All Events</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time Start
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time End
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEvents.map((event, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.timeStart}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.timeEnd}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="inline-flex px-4 py-1 text-xs font-semibold rounded bg-green-100 text-green-800 border border-green-300 hover:bg-green-200 transition">
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}