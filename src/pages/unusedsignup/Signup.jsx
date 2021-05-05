import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import { AccountBox } from "../../Components/signuppage/accountbox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 8rem;
`;

function Signup() {
  return (
    <div>
      <Navbar active={true} />
      <AppContainer>
        <AccountBox />
      </AppContainer>
    </div>
  );
}

export default Signup;
