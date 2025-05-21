import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#181F2A] text-white shadow">
      <nav className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between h-16">
        <div className="flex items-center space-x-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold flex items-center">
              <span className="text-[#F59E42]">&#60;&#62;</span>
              <span className="ml-2">HackCode</span>
            </span>
          </Link>
          <NavLink to="/problems" className={({ isActive }) => `text-base font-medium ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}>Problems</NavLink>
          <NavLink to="/playground" className={({ isActive }) => `text-base font-medium ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}>Playground</NavLink>
          <NavLink to="/explore" className={({ isActive }) => `text-base font-medium ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}>Explore</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/auth/login" className="flex items-center text-base font-medium px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-800">Sign In</Link>
        </div>
      </nav>
    </header>
  );
}
