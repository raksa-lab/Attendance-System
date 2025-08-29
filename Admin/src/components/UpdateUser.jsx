// src/components/UpdateUser.jsx
import React, { useState } from 'react';

const UpdateUser = () => {
  const [searchName, setSearchName] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // To store user data fetched
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    university: '',
    faculty: '',
    department: '',
    year: '',
  });

  // Placeholder function to simulate fetching user data
  const fetchUserByName = (name) => {
    // In a real application, you would make an API call here.
    // For now, let's mock some data based on the image.
    if (name.toLowerCase() === 'nov raksa') {
      const data = {
        firstName: 'Nov',
        lastName: 'Raksa',
        gender: 'Male',
        phoneNumber: '(225) 555-0118', // Corrected from image
        university: 'Rupp',
        faculty: 'Engineering',
        department: 'ITE',
        year: '2',
      };
      setCurrentUser(data);
      setFormData(data); // Pre-fill form with current data
    } else {
      setCurrentUser(null);
      setFormData({ // Clear form if no user found
        firstName: '', lastName: '', gender: '', phoneNumber: '',
        university: '', faculty: '', department: '', year: '',
      });
      alert("User not found or please enter 'Nov Raksa'");
    }
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchUserByName(searchName);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log('Updating user with data:', formData);
    // In a real app, send formData to your backend for update
    alert('User update initiated! Check console for data.');
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-5xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-slate-800 mb-6">Update User</h2>

      {/* Enter User Name Section */}
      <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl mb-8 flex items-center space-x-4">
        <label htmlFor="searchUserName" className="text-lg font-medium text-slate-700 whitespace-nowrap">
          Enter User Name:
        </label>
        <input
          id="searchUserName"
          type="text"
          placeholder="e.g., Nov Raksa"
          value={searchName}
          onChange={handleSearchChange}
          className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
      </form>

      {currentUser && (
        <>
          {/* Current User Details (Read-only) */}
          <div className="w-full bg-slate-50 p-6 rounded-md mb-8 border border-slate-200">
            <h3 className="text-xl font-medium text-slate-700 mb-4">Current Details:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-600">
              <p><span className="font-semibold">First Name:</span> {currentUser.firstName}</p>
              <p><span className="font-semibold">Last Name:</span> {currentUser.lastName}</p>
              <p><span className="font-semibold">Gender:</span> {currentUser.gender}</p>
              <p><span className="font-semibold">Phone:</span> {currentUser.phoneNumber}</p>
              <p><span className="font-semibold">University:</span> {currentUser.university}</p>
              <p><span className="font-semibold">Faculty:</span> {currentUser.faculty}</p>
              <p><span className="font-semibold">Department:</span> {currentUser.department}</p>
              <p><span className="font-semibold">Year:</span> {currentUser.year}</p>
            </div>
          </div>

          {/* Editable Form */}
          <form onSubmit={handleUpdateSubmit} className="w-full space-y-6">
            <h3 className="text-xl font-medium text-slate-700 mb-4">Edit Details:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <select
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                <option value="">University</option>
                <option value="Rupp">Rupp</option>
                <option value="Advance Java">Advance Java</option>
              </select>
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                <option value="">Faculties</option>
                <option value="Engineering">Engineering</option>
                <option value="A">A</option>
              </select>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                <option value="">Departments</option>
                <option value="ITE">ITE</option>
                <option value="jan">Jan</option>
              </select>
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                required
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Update User
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-200"
                onClick={() => console.log("Back button clicked")} // Add navigation logic here
              >
                Back
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateUser;