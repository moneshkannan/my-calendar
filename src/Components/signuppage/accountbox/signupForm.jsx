import React, { useContext, useState } from "react";
import axios from "axios"
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const url = "https://appointy-backend.herokuapp.com/api/v1/signup"
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    confirm_password:"",
    role:""
  })

  const handle = (e) => {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  const submit = (e) =>{
    e.preventDefault();
    console.log("submit")
    axios.post(url, {
      name : data.name,
      email : data.email,
      password : data.password,
      confirm_password : data.confirm_password,
      role : data.role
    })
    .then(
      res =>{
        console.log(res.data)
      }
    )
    window.alert("SignUp Successfully")
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={(e) => submit(e)}>
        <Input type="text" value = {data.name} id="name" onChange={(e) => handle(e)} placeholder="Full Name" />
        <Input type="email" value = {data.email} id="email" onChange={(e) => handle(e)} placeholder="Email" />
        <Input type="password" value = {data.password} id="password" onChange={(e) => handle(e)}placeholder="Password" />
        <Input type="password" value = {data.confirm_password} id="confirm_password" onChange={(e) => handle(e)} placeholder="Confirm Password" />
        <Input type="text" value = {data.role} id="role" onChange={(e) => handle(e)} placeholder="(user/admin)" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={(e) => submit(e)}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Already have an account?
        <BoldLink onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}