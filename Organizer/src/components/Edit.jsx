import { Link } from "react-router-dom";
import { useState } from "react";

export default function Edit() {
  const [title, setTitle] = useState("");
  const [startDate, SetStartDate] = useState("2025-04-10");
  const [endDate, SetEndDate] = useState("2025-04-12");
  const [location, SetLocation] = useState("NICC, Hall A");
  const [capacity, setCapacity] = useState(200);

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
            <span className="text-gray-600 font-medium">Admin</span>
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

          {/* Edit Card */}
          <div className="flex justify-center">
            <div className="bg-gray-200 rounded-2xl w-[700px] p-8 shadow">
              <div className="text-xl font-semibold mb-4">Edit : NICC Event</div>
              <hr className="mb-4 border-gray-400" />
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-medium">Title :</span>{" "}
                  <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="----------------------"
                    className="bg-transparent border-b border-gray-400 focus:outline-none ml-2"
                  />
                </div>
                <div>
                  <span className="font-medium">start Date :</span>{" "}
                  <span className="ml-2">[{new Date(startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}]</span>
                </div>
                <div>
                  <span className="font-medium">End Time :</span>{" "}
                  <span className="ml-2">[{new Date(endDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}]</span>
                </div>
                <div>
                  <span className="font-medium">Location :</span>{" "}
                  <span className="ml-2">[{location}]</span>
                </div>
                <div>
                  <span className="font-medium">Capacity :</span>{" "}
                  <select
                    value={capacity}
                    onChange={e => setCapacity(e.target.value)}
                    className="ml-2 rounded px-2 py-1"
                  >
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                    <option value={400}>400</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-8 justify-center mt-12">
            <button className="bg-red-600 text-white px-16 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg">
              Discard
            </button>
            <button className="bg-teal-500 text-white px-16 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors text-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}