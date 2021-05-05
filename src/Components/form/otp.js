import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';

export const Otp = () => {
  const validate = Yup.object({
    otp: Yup.string()
      .email('otp is invalid')
      .required('otp is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
  })
  const url ="https://appointy-backend.herokuapp.com/api/v1/login"
  return (
    <Formik
      initialValues={{
        otp: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        axios.post(url,values)
        .then(
            res =>{
                console.log(res.data)
            }
        )
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Enter OTP</h1>
          <Form>
            <TextField label="OTP" name="otp" type="otp" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Submit</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}