// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AddUser from '../components/AddUser';
import LoginPage from '../components/LoginPage';
import UserDetail from '../components/UserDetail';
import DeleteUser from '../components/DeleteUser';
import OverviewAdmin from '../components/OverviewAdmin';
import UpdateUser from '../components/UpdateUser'; 

function App() {
  return (
    <BrowserRouter>
    <Router>
      <div className="flex min-h-screen bg-slate-100">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin/overview" element={<OverviewAdmin />} />
            <Route path="/admin/add-user" element={<AddUser />} />
            <Route path="/admin/user-detail" element={<UserDetail />} />
            <Route path="/admin/update-user" element={<UpdateUser />} /> {/* New Route */}
            <Route path="/admin/delete-user" element={<DeleteUser />} /> 
            {/* {/* Add Organizer routes as needed */}
            <Route path="/organizer/overview" element={<div>Organizer Overview Content</div>} />
            <Route path="/organizer/create-event" element={<div>Create Event Content</div>} />
            <Route path="/organizer/view-event-detail" element={<div>View Event Detail Content</div>} />
            <Route path="/organizer/update" element={<div>Update Organizer Content</div>} />
            <Route path="/organizer/delete" element={<div>Delete Organizer Content</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  </BrowserRouter>);
}

export default App;