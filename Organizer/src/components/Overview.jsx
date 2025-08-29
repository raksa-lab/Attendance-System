
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Overview() {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    { name: "Nice Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Rupp", status: "Active" },
    { name: "Ryl Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "ITC", status: "Active" },
    { name: "Ckcc Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Rupp", status: "Active" },
    { name: "Eday Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Rupp", status: "Active" },
    { name: "ITC Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "ITC", status: "Active" },
    { name: "Camx Event", timeStart: "7:00 am", timeEnd: "10:30 am", location: "Khos pech", status: "Active" },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#232323] flex items-center justify-center py-8">
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
              <Link to="/Overview" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium">
                {/* Home/Overview icon */}
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
                </svg>
                Overview
              </Link>
             <Link to="/Createvent" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Plus/Create Event icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Create Event
             </Link>
             <Link to="/VieweventDetail" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Eye/View Event Detail icon */}
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
             View Event Detail
            </Link>
              <Link to="/Update" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Pencil/Update icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2H7v-2l6-6z" />
                </svg>
                Update
              </Link>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Trash/Delete icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
                Delete
              </a>
            </nav>
          </div>
          <div className="p-6">
            <span className="text-gray-600 font-medium">Admin</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <svg className="w-5 h-5 inline-block mr-2 -mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Export
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-xs text-gray-500 mb-1">Event</div>
              <div className="text-2xl font-bold text-gray-900">21</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4a1 1 0 01-1 1h-3m-10 4h10m-10 4h10" />
                </svg>
              </div>
              <div className="text-xs text-gray-500 mb-1">Export</div>
              <div className="text-2xl font-bold text-gray-900">17</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
                </svg>
              </div>
              <div className="text-xs text-gray-500 mb-1">Members</div>
              <div className="text-2xl font-bold text-gray-900">1,893</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <div className="mb-2">
                <h3 className="text-xs font-medium text-gray-600 mb-2 text-center">REVENUE BY SECTION</h3>
                {/* Simple Pie Chart SVG */}
                <svg width="48" height="48" viewBox="0 0 36 36" className="mx-auto">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="4"
                    strokeDasharray="60, 40"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 0 0 31.831"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="4"
                    strokeDasharray="40, 60"
                  />
                </svg>
                <div className="flex justify-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-600">Men</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-gray-600">Women</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">List All Events</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
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
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {event.status}
                        </span>
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