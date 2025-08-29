import { Monitor, Folder, Users } from "lucide-react"

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* Event Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#e6f7ed] flex items-center justify-center">
          <Monitor className="w-6 h-6 text-[#28a745]" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Event</p>
          <p className="text-2xl font-bold text-[#212529]">21</p>
        </div>
      </div>

      {/* Export Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#e6f7ed] flex items-center justify-center">
          <Folder className="w-6 h-6 text-[#28a745]" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Export</p>
          <p className="text-2xl font-bold text-[#212529]">17</p>
        </div>
      </div>

      {/* Members Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#e6f7ed] flex items-center justify-center">
          <Users className="w-6 h-6 text-[#28a745]" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Members</p>
          <p className="text-2xl font-bold text-[#212529]">1,893</p>
        </div>
      </div>

      {/* Revenue by Section Card (Pie Chart) */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-sm text-gray-500 mb-4">REVENUE BY SECTION</p>
        <div className="flex items-center justify-center gap-4">
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-[#87ceeb] via-[#87ceeb] to-[#ff69b4]">
            {/* This is a simplified representation of a pie chart */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white"></div>
            </div>
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#87ceeb] flex items-center justify-center text-xs font-bold text-white"
              style={{ transform: "rotate(144deg) translate(-50%, -50%)" }}
            >
              <span style={{ transform: "rotate(-144deg)" }}>40%</span>
            </div>
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#ff69b4] flex items-center justify-center text-xs font-bold text-white"
              style={{ transform: "rotate(324deg) translate(-50%, -50%)" }}
            >
              <span style={{ transform: "rotate(-324deg)" }}>60%</span>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#87ceeb]"></span>
              <span>Men</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff69b4]"></span>
              <span>Woman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
