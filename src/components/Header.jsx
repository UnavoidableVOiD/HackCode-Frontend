import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
      <header className="sticky z-50 top-0 bg-[#0F1729] text-white">
        <nav className="px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold flex items-center">
                HackCode
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/problems"
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                Problems
              </NavLink>

              <NavLink
                to="/playground"
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                Playground
              </NavLink>

              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                Explore
              </NavLink>
            </div>

            <div className="flex items-center space-x-2">
              <Link
                to="/auth/login"
                className="flex items-center text-sm font-medium px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-800"
              >
                Sign In
              </Link>

              <Link
                to="/auth/register"
                className="flex items-center text-sm font-medium px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  };