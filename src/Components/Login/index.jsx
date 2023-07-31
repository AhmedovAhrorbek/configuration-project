import { Formik } from "formik";
import {connect} from "react-redux";
import { signIn } from "../../Redux/Action/loginAction";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
export const Login = (props) => {
    const navigate = useNavigate();
  return (
    <Fragment>
      <div className="container">
        <div className="row vh-100 justify-content-center">
          <div className="col-4 justify-content-center">
            <div className="card mt-5">
              <div className="card-header">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <Formik
                  initialValues={{
                    username : "", 
                    email: "",
                    password: "" }}

                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values) =>{
                     props.signIn(values, navigate);
                  }}
                  
                >
                  {({  
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <input
                        className="form-control mb-3"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        placeholder="username"
                      />
                      <input
                        className="form-control mb-3"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="email"
                      />
                      {errors.email && touched.email && errors.email}
                      <input
                        className="form-control mb-3"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="password"
                      />
                      {errors.password && touched.password && errors.password}
                      <button className="btn btn-primary w-100"  type="submit">
                        Sign in
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  loader: PropTypes.bool,
  signIn: PropTypes.func,
};

const mapStateToProps = (state) =>{
   return {
     loader: state.login.loader,
   }
};

export default connect( mapStateToProps,  { signIn } ) (Login);
