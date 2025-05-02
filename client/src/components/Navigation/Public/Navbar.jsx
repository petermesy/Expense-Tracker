import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const content = (
    <>
      
        {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
        <div className="container-fluid">
          <ul>
          <Link to="Home">
            <li>Home</li>
          </Link>
          <Link to="add-expense">
            <li>New Expense</li>
          </Link>
          <Link to="add-income">
            <li>New Income</li>
          </Link>
          <Link to="login">
            <li>Sign In SignUp</li>
          </Link>
          <Link to="register">
            <li>Home</li>
          </Link>
        </ul> 
        </div>
        </nav> */}

     
    </>
  );
  return (
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
    //   <div className="container-fluid">
    //     {/* Brand Logo */}
    //     <Link to="/" className="navbar-brand">
    //       <i className="bi bi-currency-exchange fs-1 text-warning"></i>
    //     </Link>

    //     {/* Toggle Button for Mobile */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     {/* Navbar Links */}
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link to="/"
    //           className="nav-link text-white">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/add-expense" className="btn btn-outline-warning me-2">
    //             New Expense
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/profile"
    //                 className="btn btn-primary me-2 mb-2 mb-sm-0">
    //                 New Income
    //           </Link>
    //         </li>
    //       </ul>

    //       {/* Right Side Buttons */}
    //       <div className="d-flex">
    //         <Link to="/login" className="btn btn-outline-light me-2">
    //           Sign In
    //         </Link>
    //         <Link to="/register" className="btn btn-primary">
    //           Sign Up
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-dark bg-dark text-white">
      <div className="h-10vh flex justify-between x-50 text-whit lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify and font:hidden">
          <div className="flex-10">
            <div className="flex gap-8 mr-16 text-[18px]">
              <Link to="/">
                <h4>Home</h4> 
              </Link>
              <Link to="add-expense">
                <h4>New Expense</h4>
              </Link>
              <Link to="add-income">
                <h4>New Income</h4>
              </Link>

           
        
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
