import React, { useContext, useState } from "react";
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
import Notification from "../../../service/NotificationService";
import history from "../../../utils/history";
import axios from "axios";
import API from "../../../service/api";

export function ForgotForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`${API}/generate_otp`, { email: email })
      .then((res) => {
        Notification.show(res.data);
        setIsLoading(false);
        setEmail("");
        history.push("/");
      })
      .catch((err) => {
        if (err.response) {
          setIsLoading(false);
          Notification.show(err.response.data);
          setEmail("");
        }
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitData}>
        {isLoading ? <i className="bx bx-loader-circle bx-spin"></i> : "Submit"}
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Remembered Password ?{" "}
        <BoldLink onClick={switchToSignin}>Signin</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
