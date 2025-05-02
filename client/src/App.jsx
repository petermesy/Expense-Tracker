import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/user/Login";
import Register from "./Pages/user/Register";
import AddIncome from "./Pages/income/AddIncome";
import AddExpenses from "./Pages/Expense/AddExpenses";
import Profile from "./Pages/user/Profile";
import Navbar from "./components/Navigation/Public/Navbar";
import ProtectedRoute from "./components/Navigation/Private/ProtectedRoute";
import NotAdmin from "./components/NotAdmin";
import AdminRoute from "./components/Navigation/Private/AdminRoute";
import Dashboard from "./Pages/user/Dashboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<NotAdmin />} />
        <Route
          path="/dashboard"
          element={<AdminRoute element={<Dashboard />} />}
        />
        <Route
          path="/add-income"
          element={<ProtectedRoute element={<AddIncome />} />}
        />
        <Route
          path="/add-expense"
          element={<ProtectedRoute element={<AddExpenses />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
// git status
// git add .
// git commit -m "Updated App.jsx: Added ProtectedRoute and AdminRoute for dashboard and other routes"
// git push