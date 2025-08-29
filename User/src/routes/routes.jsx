import { Routes, Route, Navigate } from "react-router-dom";


//  User-facing components
import Login from "../components/Login/Login";
import Welcome from "../components/Welcome/welcome";
import GetStart from "../components/GetStart/Getstart";
import OnlineRegister from "../components/OnlineRegis/OnlineRegister";
import RegisterSuccess from "../components/RegisterSuccess"; 
import InputDesgin from "../components/ResgisterNow/InputDesgin";


export default function AppRoutes() {
  return (
    <Routes>
      {/*  User-facing routes */}
      <Route path="/" element={<Welcome />} />
      <Route path="/GetStart" element={<GetStart />} />
      <Route path="/Register" element={<OnlineRegister />} />
      <Route path="/Register-Now" element={<InputDesgin />} />
      <Route path="/Register-Success" element={<RegisterSuccess />} />
      <Route path="/login" element={<Login />} />
      </Routes>
  )
}      