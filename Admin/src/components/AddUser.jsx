

import React, { useState } from 'react';

const AddUser = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();/////////-///-
    console.log('Form Data Submitted:', formData);
    // Add logic here to submit data to your backend
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-slate-800 mb-6">Add User</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-6">
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
            Add User
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;