import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form_input">
      {/* <label htmlFor={field.name} className="form_label">{label}</label> */}
      <input
        style={{ background: "transparent", border: "none", borderBottom: "2px solid #fff", color: "#fff" }}
        className={`form-control shadow-none ${meta.touched && meta.error && 'form_error'}`}
        {...field} {...props}
        autoComplete="off"
        placeholder={label}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}