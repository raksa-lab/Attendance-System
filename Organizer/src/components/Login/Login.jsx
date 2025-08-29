"use client"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

export default function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("organizer")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", { userType, username, password, rememberMe })
    // Navigate to Overview page after login
    navigate("/Overview");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Title and description */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-md">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Attendance</h1>
          <h2 className="text-5xl font-light text-blue-600 mb-8">Dashboard</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iusto accusantium odio, soluta, corrupti
            aliquam quibusdam temporibus at cupiditate quas eam maiores libero veritatis? Dicta facilis sint aliquid
            ipsum atque?
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User type selection */}
            <div className="flex gap-4">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 flex-1">
                <input
                  type="radio"
                  id="organizer"
                  name="userType"
                  value="organizer"
                  checked={userType === "organizer"}
                  onChange={(e) => setUserType(e.target.value)}
                  className="text-blue-600"
                />
                <label htmlFor="organizer" className="text-sm font-medium">
                  Organizer
                </label>
              </div>
              <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 flex-1">
                <input
                  type="radio"
                  id="admin"
                  name="userType"
                  value="admin"
                  checked={userType === "admin"}
                  onChange={(e) => setUserType(e.target.value)}
                  className="text-blue-600"
                />
                <label htmlFor="admin" className="text-sm font-medium">
                  Admin
                </label>
              </div>
            </div>

            {/* Username field */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="text-sm font-medium text-gray-700">
                Remember me
              </label>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}