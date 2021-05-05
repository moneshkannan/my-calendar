import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Forgotpassword = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
  })
  const url ="https://appointy-backend.herokuapp.com/api/v1/login"
  return (
    <Formik
      initialValues={{
        email: '',
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
          <h1 className="my-4 font-weight-bold .display-4">Forgot password ?</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <button className="btn btn-dark mt-3" type="submit"><Link to="/Otp" style={{ textDecoration: "none", color: "#fff" }}>Submit</Link></button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}