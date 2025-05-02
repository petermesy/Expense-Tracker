import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
  const location = useLocation();

  // Define routes where Navbar should not be displayed
  const hideNavbarRoutes = ["/dashboard", "/add-income", "/add-expense", "/profile","/not-found"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/not-found" 
        element={<ProtectedRoute element={<NotAdmin/>}/>}  
        />
        

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