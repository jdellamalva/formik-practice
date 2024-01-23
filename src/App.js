import React from "react";
import './index.css';
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert('Login Successful');
      console.log('form: ', values);
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="fieldLabel">Email</div>
        <input name="email" id="emailField" type="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" className="error">{formik.errors.email}</div> : <div className="spacer"></div>}
        <div className="fieldLabel">Password</div>
        <input name="password" id="pswField" type="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" className="error">{formik.errors.password}</div> : <div className="spacer"></div>}
        <div id="pswError"></div>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
