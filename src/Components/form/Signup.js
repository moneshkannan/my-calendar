import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios'
import history from "../../utils/history";
import API from "../../service/api";
import Notification from "../../service/NotificationService";
import "./form.css"
import { Link } from 'react-router-dom';

export const Signup = () => {

  const validate = Yup.object({
    name: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
    ,
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  const [isLoading, setIsLoading] = useState(false);


  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: "user"
      }}

      validationSchema={validate}


      onSubmit={values => {
        setIsLoading(true);
        axios
          .post(`${API}/signup`, values)
          .then((res) => {
            Notification.show(res.data);
            history.push("/login");
            setIsLoading(false);
            return;
          })
          .catch((err) => {
            if (err.response) {
              setIsLoading(false);
              Notification.show(err.response.data);
              history.push("/signup");
            }
          });
      }}
    >



      {formik => (
        <div className="form">
          <h3 className="font-weight-bold" style={{ marginBottom: '1.75rem' }}>Sign Up</h3>
          <Form>
            {/* <TextField label="First Name" name="firstName" type="text" /> */}
            <TextField label="Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirm_password" type="password" />
            <button className="btn form_button_submit" type="submit">
              {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "Register"}
            </button>
            <button className="btn form_button_reset ml-3" type="reset">Reset</button>
          </Form>
          <h6 className="form_right" style={{ marginTop: "2rem" }}>
            Already Have an Account ?
              <Link to="/Login" style={{ marginLeft: ".5rem", color: "#000" }}>
              Sign in
              </Link>
          </h6>
        </div>
      )}
    </Formik>
  )
}