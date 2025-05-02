import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/slice/users/usersSlices";
import DisabledButton from "../../components/DisabledButton";

// Form validation schema
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the location state
  const dispatch = useDispatch();

  // Get data from Redux store
  const user = useSelector((state) => state?.users);
  const { userAppErr, userServerErr, userLoading, userAuth } = user;

  // Formik form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values));
    },
    validationSchema: formSchema,
  });

  // Redirect after login
  useEffect(() => {
    if (userAuth) {
      const from = location.state?.from?.pathname || "/"; // Redirect to the requested route or home
      navigate(from, { replace: true });
    }
  }, [userAuth, navigate, location]);

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
              Keep Track of what you are spending
            </h2>
            <hr className="text-warning w-50" />
          </div>

          {/* Right Form Section */}
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center shadow">
              <span className="text-muted">Sign In</span>
              <h3 className="fw-bold mb-4">Login to your account</h3>

              {userAppErr || userServerErr ? (
                <div className="alert alert-danger" role="alert">
                  {userAppErr || userServerErr}
                </div>
              ) : null}

              <form onSubmit={formik.handleSubmit}>
                <input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email address"
                />
                <div className="text-danger mb-2">
                  {formik.touched.email && formik.errors.email}
                </div>
                <input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="form-control mb-3"
                  type="password"
                  placeholder="Password"
                />
                <div className="text-danger mb-2">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  {userLoading ? (
                    <DisabledButton />
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary py-2 w-100 mb-4"
                    >
                      Login
                    </button>
                  )}
                </div>
                <div>
                  Create Account <Link to="/register">here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;