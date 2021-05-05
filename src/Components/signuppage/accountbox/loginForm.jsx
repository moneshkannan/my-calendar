import React, { useContext, useState } from "react";
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
import { storedataInlocalStorage } from "../../../service/authCheck";
import history from "../../../utils/history";
import API from "../../../service/api";
import axios from "axios";
import Notification from "../../../service/NotificationService";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToForgot } = useContext(AccountContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const submit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const requestData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post(`${API}/login`, requestData)
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
  };

  return (
    <BoxContainer>
      <FormContainer
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <Input
          type="email"
          placeholder="Email"
          value={data.email}
          id="email"
          onChange={(e) => {
            handle(e);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={data.password}
          id="password"
          onChange={(e) => {
            handle(e);
          }}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink1 onClick={switchToForgot}>Forget your password?</MutedLink1>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton
        type="submit"
        onClick={(e) => {
          submit(e);
        }}
      >
        {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "Signin"}
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup}>Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
