import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios'

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
  const url = "https://appointy-backend.herokuapp.com/api/v1/signup";
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirm_password: ''
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
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            {/* <TextField label="First Name" name="firstName" type="text" /> */}
            <TextField label="Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirm_password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}