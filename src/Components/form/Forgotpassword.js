import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import history from "../../utils/history";
import API from "../../service/api";
import Notification from "../../service/NotificationService";

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
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Forgot password ?</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <button className="btn btn-dark mt-3" type="submit">
              {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "Submit"}
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}