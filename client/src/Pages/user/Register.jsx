import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import DisabledButton from "../../components/DisabledButton";
import { registerUserAction } from "../../redux/slice/users/usersSlices";
// Form validation schema
const formSchema = Yup.object({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get data from Redux store
  const user = useSelector((state) => state?.users);
  const { userAppErr, userServerErr, userLoading, userAuth } = user;

  // Formik form
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(registerUserAction(values)); // Dispatch registration action (replace with actual action)
      // dispatch(registerUserAction(values));
    },
    validationSchema: formSchema,
  });
  useEffect(() => {
    if (userAuth) {
      navigate("/login");
    }
  }, [userAuth, navigate]);

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
              Keep Track of Your Income and Expenses
            </h2>
            <hr className="text-warning w-50" />
          </div>

          {/* Right Form Section */}
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center shadow">
              <span className="text-muted">New User</span>
              <h3 className="fw-bold mb-4">Register</h3>

              {/* Display errors */}
              {userAppErr || userServerErr ? (
                <div className="alert alert-danger" role="alert">
                  {userAppErr || userServerErr}
                  console.log(userApErr|| userServerErr);
                  
                </div>
             
              ) : null}
           
              <form onSubmit={formik.handleSubmit}>
                <input
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control mb-3"
                  type="text"
                  placeholder="First Name"
                />
                <div className="text-danger mb-2">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>

                <input
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control mb-3"
                  type="text"
                  placeholder="Last Name"
                />
                <div className="text-danger mb-2">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>

                <input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email Address"
                />
                <div className="text-danger mb-2">
                  {formik.touched.email && formik.errors.email}
                </div>

                <input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                      Register
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
