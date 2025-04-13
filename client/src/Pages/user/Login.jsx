import React from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux' 
import { loginUserAction } from "../../redux/slice/users/usersSlices";
//form validation
const formSchema=Yup.object({
  email:Yup.string().required("Email is required"),
  password:Yup.string().required("Password is required"),
})

const Login = () => {
  //dispatch
  const dispatch=useDispatch();

  // formic form
  const formik=useFormik({
    initialValues:{
      email: "",
      password: "",
    },

    onSubmit:values=>{
dispatch(loginUserAction(values));      
    },
    validationSchema:formSchema
  });
  
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

              <form onSubmit={formik.handleSubmit}>
                <input
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
                   value={formik.values.password}
                   onChange={formik.handleChange('password')}
                   onBlur={formik.handleBlur("password")}
                  className="form-control mb-3"
                  type="password"
                  placeholder="Password"
                />
                  <div className="text-danger mb-2">
                  {formik.touched.password && formik.errors.password}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary py-2 w-100 mb-4"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;