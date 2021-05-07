import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import history from "../../utils/history";
import API from "../../service/api";
import Notification from "../../service/NotificationService";
import { Link } from 'react-router-dom';

export const Forgotpassword = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
  })

  const [isLoading, setIsLoading] = useState(false);


  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        setIsLoading(true);
        axios
          .post(`${API}/generate_otp`, values)
          .then((res) => {
            Notification.show(res.data);
            history.push("/Otp");
            setIsLoading(false);
            return;
          })
          .catch((err) => {
            if (err.response) {
              setIsLoading(false);
              Notification.show(err.response.data);
            }
          });
      }}
    >
      {formik => (
        <div className="form">

          <h3 className="font-weight-bold" style={{ marginBottom: '1.75rem' }}>Forgot password ?</h3>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <button className="btn form_button_submit" type="submit">
              {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "Submit"}
            </button>
            <button className="btn form_button_reset ml-3" type="reset">Reset</button>
          </Form>
          <h6 className="form_right" style={{ marginTop: "2rem" }}>Remembered password!!!
               <Link to="/Login" style={{ marginLeft: ".5rem", color: "#000" }}>Signin</Link>
          </h6>
        </div>
      )}
    </Formik>
  )
}