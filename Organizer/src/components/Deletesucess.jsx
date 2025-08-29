import { Link } from "react-router-dom";

export default function Deletesucess() {
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
            <span className="text-gray-600 font-medium">Admin</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center py-10 px-8">
          {/* Header */}
          <div className="w-full flex justify-center mb-6">
            <div className="bg-gray-200 rounded-xl px-10 py-2 text-xl font-semibold text-gray-700">
              All Events
            </div>
          </div>

          {/* Success Icon and Message */}
          <div className="flex flex-col items-center mt-8">
            <svg className="w-28 h-28 text-red-700 mb-4" fill="currentColor" viewBox="0 0 64 64">
              <path d="M32 12c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 36a2 2 0 110 4 2 2 0 010-4zm2-8a2 2 0 01-4 0V24a2 2 0 014 0v16z"/>
              <rect x="46" y="18" width="4" height="12" rx="2" fill="#b91c1c"/>
            </svg>
            <div className="text-2xl font-semibold mb-2">Delete Successful</div>
            <div className="text-center text-gray-700 mb-8">
              This will permanently remove <span className="font-semibold">“NICC Event”</span> and all associated data.
            </div>
            <button className="bg-red-700 text-white px-12 py-3 rounded-md font-semibold text-lg hover:bg-red-800 transition">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}