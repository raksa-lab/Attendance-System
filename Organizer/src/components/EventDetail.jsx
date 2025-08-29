import { Link } from "react-router-dom";

export default function EventDetail() {
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
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
                </svg>
                Overview
              </Link>
              <Link to="/Createvent" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Create Event
              </Link>
              <Link to="/VieweventDetail" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium shadow">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Event
              </Link>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2H7v-2l6-6z" />
                </svg>
                Update
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
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
        <div className="flex-1 flex flex-col items-center py-10 px-8">
          {/* Header */}
          <div className="w-full flex justify-center mb-6">
            <div className="bg-gray-200 rounded-xl px-10 py-2 text-xl font-semibold text-gray-700">
              View Events Detail
            </div>
          </div>

          <div className="flex w-full gap-8">
            {/* Event Card */}
            <div className="flex-1 bg-gray-100 rounded-2xl p-8 shadow flex flex-col">
              <div className="text-2xl font-semibold mb-4">NICC Event</div>
              <div className="border-b border-gray-400 pb-4 mb-4">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">Organizer :</span> Sapanha Kea
                  </div>
                  <div>
                    <span className="font-medium">Status :</span>
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      ● Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  11-12 Apr 2025
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  9:00 AM - 5:00 PM
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
                  </svg>
                  Rupp CACC
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 17v1a3 3 0 01-6 0v-1" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7a4 4 0 00-4 4v1a4 4 0 008 0v-1a4 4 0 00-4-4z" />
                  </svg>
                  180/200 Registered
                </div>
              </div>
            </div>

            {/* Calendar Card */}
            <div className="w-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 shadow flex flex-col items-center">
              <div className="text-lg font-bold text-purple-700 mb-2">Event Dates</div>
              {/* Simple Calendar */}
              <div className="bg-white rounded-xl p-4 shadow mb-4">
                <div className="text-center text-gray-700 font-semibold mb-2">July 2025</div>
                <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2">
                  <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-sm">
                  <div></div><div></div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                  <div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div>
                  <div>13</div><div>14</div>
                  <div className="bg-purple-400 text-white rounded-full text-center">15</div>
                  <div className="bg-purple-400 text-white rounded-full text-center">16</div>
                  <div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div>
                  <div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div>
                  <div>31</div>
                </div>
              </div>
              <div className="text-xs text-gray-700">
                <div>Date: <span className="font-semibold text-purple-700">Jul 15, 2025</span></div>
                <div>To: <span className="font-semibold text-purple-700">Jul 16, 2025</span></div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-8 justify-center mt-10">
            <button className="bg-red-600 text-white px-12 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
              Back
            </button>
            <button className="bg-green-600 text-white px-12 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors">
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}