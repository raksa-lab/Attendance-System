// // src/App.jsx

import { Router } from "react-router-dom";
import RouteApp from "./routes/routes";

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// // Import all your components
// import Login from './components/Login';
// import OverviewAdmin from './components/OverviewAdmin';
// import Sidebar from './components/Sidebar';
// import AddUser from './components/AddUser';
// import UserDetail from './components/UserDetail';
// import DeleteUser from './components/DeleteUser';
// import UpdateUser from './components/UpdateUser';

// // This new component acts as the layout for all admin-related pages.
// // It includes the Sidebar and a main content area.
// const AdminLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-slate-100 font-inter">
//       {/* The Sidebar component is always visible within this layout */}
//       <Sidebar />
//       {/* The main content area where nested routes will be rendered */}
//       <main className="flex-1 ml-64 p-8">
//         <Outlet />
//       </main>
//     </div>
//   );
// };


// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* The Login page is a standalone route at the base path */}
//         <Route path="/" element={<Login />} />

//         {/* All admin pages are now nested within the AdminLayout. */}
//         {/* This means they will automatically get the Sidebar and layout styling. */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route path="overview" element={<OverviewAdmin />} />
//           <Route path="add-user" element={<AddUser />} />
//           <Route path="user-detail" element={<UserDetail />} />
//           <Route path="update-user" element={<UpdateUser />} />
//           <Route path="delete-user" element={<DeleteUser />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// function App (){
//     return (
//         <Router>
//             <RouteApp/>
//         </Router>
        
//     );
// }
// export default App;