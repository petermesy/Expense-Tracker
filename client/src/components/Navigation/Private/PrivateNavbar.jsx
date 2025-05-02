import React from "react";
import { Link } from "react-router-dom";

const PrivateNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Expense Tracker</Link>
        </h1>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/expenses" className="hover:text-gray-400">
              Expenses List
            </Link>
          </li>
          <li>
            <Link to="/incomes" className="hover:text-gray-400">
              Income List
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-400">
              Profile
            </Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/add-expense"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            New Expenses
          </Link>
          <Link
            to="/add-income"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            New Income
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobile-menu"
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className="md:hidden collapse bg-gray-700 text-white p-4 space-y-4"
          id="mobile-menu"
        >
          <Link to="/expenses" className="block hover:text-gray-400">
            Expenses List
          </Link>
          <Link to="/incomes" className="block hover:text-gray-400">
            Income List
          </Link>
          <Link to="/dashboard" className="block hover:text-gray-400">
            Dashboard
          </Link>
          <Link to="/profile" className="block hover:text-gray-400">
            Profile
          </Link>
          <Link
            to="/add-expense"
            className="block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            New Expenses
          </Link>
          <Link
            to="/add-income"
            className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            New Income
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;