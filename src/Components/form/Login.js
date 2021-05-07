import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { storedataInlocalStorage } from "../../service/authCheck";
import history from "../../utils/history";
import API from "../../service/api";
import Notification from "../../service/NotificationService";
import { Link } from 'react-router-dom';



export const Login = () => {



  const [isLoading, setIsLoading] = useState(false);

  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
  })


  return (
    <Formik

      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}

      onSubmit={values => {
        setIsLoading(true);
        axios
          .post(`${API}/login`, values)
          .then((res) => {
            storedataInlocalStorage(res.data.response_data);
            Notification.show(res.data);
            history.push("/");
            setIsLoading(false);
            return;
          })
          .catch((err) => {
            if (err.response) {
              setIsLoading(false);
              Notification.show(err.response.data);
              history.push("/login");
            }
          });
      }}


    >
      {formik => (
        <div className="form">
          <h3 className="font-weight-bold" style={{ marginBottom: '1.75rem' }}>Login</h3>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <div className="form_right" style={{ marginTop: "-20px", padding: "10px" }}>
              <Link to="/Forgotpassword" style={{ color: "#fff", textAlign: "right", fontSize: "13px" }}>
                Forgot password ?
              </Link>
            </div>

            <button className="btn form_button_submit" type="submit">
              {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "Login"}
            </button>
            <button className="btn form_button_reset ml-3" type="reset">Reset</button>
          </Form>
          <h6 className="form_right" style={{ marginTop: "2rem" }}>
            Do not have an Account
              <Link to="/signup" style={{ marginLeft: ".5rem", color: "#000" }}>
              Sign up
              </Link>
          </h6>
        </div>
      )
      }
    </Formik >
  )
}