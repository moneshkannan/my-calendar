import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  MutedLink1,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [data, setData] = useState({
    email:"",
    password:"",
  })

  const url ="https://appointy-backend.herokuapp.com/api/v1/login"
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
      email : data.email,
      password : data.password,
    })
    .then(
      res =>{
        console.log(res.data)
      }
    )
    window.alert("Login Successfully")
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={(e)=>{submit(e)}}>
        <Input 
          type="email" 
          placeholder="Email" 
          value={data.email} 
          id ="email" 
          onChange={(e) => {handle(e)}}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={data.password} 
          id ="password" 
          onChange={(e) => {handle(e)}}
          />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink1 href="">Forget your password?</MutedLink1>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={(e)=>{submit(e)}}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em"/>
      <MutedLink>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}