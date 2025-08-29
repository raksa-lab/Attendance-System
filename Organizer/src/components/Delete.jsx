import { Link } from "react-router-dom";
import { useState } from "react";

export default function Delete() {
  const [events, setEvents] = useState([
    { title: "NICC Event", start: "Apr 10,2025 9:00am", end: "Apr 12,2025 5:00am" },
    { title: "CJCC Event", start: "June2,2025 8:00am", end: "June 2,2025 4:00am" },
    { title: "Cyber", start: "Aug 8,2025 7:00am", end: "Aug 8,2025 5:00pm" },
    { title: "RYL", start: "Sep 9,2025 1:00pm", end: "Sep 12,2025 5:00pm" },
  ]);

  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

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
              <Link to="/Update" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                {/* Update icon */}
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2H7v-2l6-6z" />
                </svg>
                Update
              </Link>
              <Link to="/Delete" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium shadow">
                {/* Delete icon */}
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
                Delete
              </Link>
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
            <h1 className="text-2xl font-semibold text-gray-500">Overview</h1>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <svg className="w-5 h-5 inline-block mr-2 -mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Export
            </button>
          </div>

          {/* Events Table */}
          <div className="flex justify-center">
            <div className="bg-gray-200 rounded-2xl w-[700px] p-8 shadow">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-600 text-base">
                    <th className="pb-4">Title</th>
                    <th className="pb-4">Start Date</th>
                    <th className="pb-4">End Date</th>
                    <th className="pb-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, idx) => (
                    <tr key={idx} className="text-gray-800 text-base">
                      <td className="py-3">{event.title}</td>
                      <td className="py-3">{event.start}</td>
                      <td className="py-3">{event.end}</td>
                      <td className="py-3">
                        <button
                          className="bg-red-600 text-white px-5 py-1 rounded-md font-medium hover:bg-red-700 transition"
                          onClick={() => handleDelete(idx)}
                        >
                          Delete
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