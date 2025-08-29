import { Routes, Route } from "react-router-dom"
import Login from "../components/Login/Login"
import Overview from "../components/Overview"
import Createvent from "../components/Createvent"
import VieweventDetail from "../components/VieweventDetail"
import EventDetail from "../components/EventDetail"
import Update from "../components/Update"
// import Editevent from "../component/Editevent"
import Edit from "../components/Edit";
import Delete from "../components/Delete";
import Deletesucess from "../components/Deletesucess"

export default function AppRoutes() {
  return (
    <Routes>
      {/* User-facing routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Overview" element={<Overview />} />
      <Route path= "/Createvent" element= {<Createvent/>}/>
      <Route path= "/VieweventDetail" element= {<VieweventDetail/>}/>
      <Route path= "/EventDetail" element= {<EventDetail/>}/>
      <Route path=  "/Update" element= {<Update/>}/>
      <Route path=  "/Edit" element= {<Edit/>}/>
      <Route path=  "/Delete" element= {<Delete/>}/>
      <Route path= "/Deletesucess" element= {<Deletesucess/>}/>


    
    </Routes>
  )
}
