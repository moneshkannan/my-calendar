import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import history from "../../utils/history";
import API from "../../service/api";
import Notification from "../../service/NotificationService";

export const Otp = () => {

  const validate = Yup.object({
    otp: Yup.string()
      .required('otp is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
  })

  const [isLoading, setIsLoading] = useState(false);


  return (
    <Formik
      initialValues={{
        otp: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        setIsLoading(true);
        axios
          .post(`${API}/forgot_password`, values)
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
            }
          });
      }}
    >
      {formik => (
        <div className="form">
          <h3 className="font-weight-bold" style={{ marginBottom: '1.75rem' }}> Enter OTP</h3>
          <Form>
            <TextField label="OTP" name="otp" type="otp" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn form_button_submit" type="submit">
              {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "Submit"}
            </button>
            <button className="btn form_button_reset ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}