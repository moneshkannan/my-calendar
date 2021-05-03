import React from 'react'
import styled from "styled-components";
import Navbar from '../Components/Navbar/Navbar'
import { AccountBox } from "../Components/signuppage/accountbox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 30px;
`;

function Signup() {
    return (
        <div>
            <Navbar/>
            <AppContainer>
                <AccountBox />
            </AppContainer>
        </div>
    )
}

export default Signup