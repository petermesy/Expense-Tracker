import React from "react";

const Register = () => {
  return (
    <section
      className="position-relative py-5 overflow-hidden vh-100"
      style={{ backgroundColor: "" }}
    >
      {/* Left Dark Section */}
      <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>

      {/* Right Light Section */}
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>

      <div className="container position-relative mx-auto">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-12 col-lg-6">
            <h2 className="display-5 fw-bold mb-4 text-white">
              Keep Track of your income and expenses flow
            </h2>
            <hr className="text-warning w-50" />
          </div>

          {/* Right Form Section */}
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center shadow">
              <span className="text-muted">New User</span>
              <h3 className="fw-bold mb-4">Register</h3>

              <form>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className="form-control mb-3"
                  type="password"
                  placeholder="Password"
                />

                <button
                  type="submit"
                  className="btn btn-primary py-2 w-100 mb-4"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;