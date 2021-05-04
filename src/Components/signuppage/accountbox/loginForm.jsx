import React, { useContext } from "react";
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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink1 href="">Forget your password?</MutedLink1>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}