import { useState } from "react";

export default function Createvent() {
  const [form, setForm] = useState({
    fullName: "",
    shortName: "",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    venue: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Event Created!");
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
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" />
                </svg>
                Overview
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Create Event
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Event Detail
              </a>
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
        <div className="flex-1 p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Create Event</h1>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <svg className="w-5 h-5 inline-block mr-2 -mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Export
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Information */}
            <div>
              <h2 className="font-semibold mb-2">Information</h2>
              <div className="bg-gray-200 rounded-xl p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium">Full Name Event :</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Short Name Event :</label>
                  <input
                    type="text"
                    name="shortName"
                    value={form.shortName}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Description :</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <h2 className="font-semibold mb-2">Date&Time</h2>
              <div className="bg-gray-200 rounded-xl p-6 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Start Date:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">End Date:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Start Time:</label>
                  <input
                    type="time"
                    name="startTime"
                    value={form.startTime}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">End Time:</label>
                  <input
                    type="time"
                    name="endTime"
                    value={form.endTime}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="font-semibold mb-2">Location</h2>
              <div className="bg-gray-200 rounded-xl p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium">Venue:</label>
                  <input
                    type="text"
                    name="venue"
                    value={form.venue}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* QR Code Generation */}
            <div>
              <h2 className="font-semibold mb-2">QR Code Generation</h2>
              <div className="bg-gray-200 rounded-xl p-6">
                <span className="text-gray-700">
                  A Unique QR Code will be automatically generated for this event once you save
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
              >
                Create
              </button>
              <button
                type="button"
                className="bg-red-600 text-white px-8 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors"
                onClick={() => setForm({
                  fullName: "",
                  shortName: "",
                  description: "",
                  startDate: "",
                  endDate: "",
                  startTime: "",
                  endTime: "",
                  venue: "",
                  address: "",
                })}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}