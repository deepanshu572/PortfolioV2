import React from "react";
import { NavLink } from "react-router";
function NavBar() {
  return (
    <>
    
      <nav className="navbar_wrap fixed z-[1080] w-full ">
        <div className="navbar backdrop-blur-[4px]  m-auto w-[35rem] flex gap-4 items-center justify-evenly bg-[#ffffffb3]  my-4 mt-[2rem] p-2 rounded-3xl">
          <NavLink 
            style={({ isActive }) => ({
              color: isActive ? "black" : "#6B7280",

              backgroundColor: isActive ? "#F3F4F6" : "",
            })}
            to="/home"
            className="text-[0.91rem] font-[500] p-3 py-[0.3rem] rounded-3xl"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#6B7280",

              backgroundColor: isActive ? "#F3F4F6" : "",
            })}
            to="/About"
            className="text-[0.91rem] font-[500] p-3 py-[0.3rem] rounded-3xl "
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#6B7280",

              backgroundColor: isActive ? "#F3F4F6" : "",
            })}
            to="/project"
            className="text-[0.91rem] font-[500] p-3 py-[0.3rem] rounded-3xl "
          >
            Project
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#6B7280",

              backgroundColor: isActive ? "#F3F4F6" : "",
            })}
            to="/Skills"
            className="text-[0.91rem] font-[500] p-3 py-[0.3rem] rounded-3xl "
          >
            Skills
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#6B7280",

              backgroundColor: isActive ? "#F3F4F6" : "",
            })}
            to="/Exprience"
            className="text-[0.91rem] font-[500] p-3 py-[0.3rem] rounded-3xl "
          >
            Exprience
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "#6B7280",

              backgroundColor: isActive ? "#F3F4F6" : "",
            })}
            to="/Contact"
            className="text-[0.91rem] font-[500] p-3 py-[0.3rem] rounded-3xl "
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
