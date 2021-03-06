import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.span`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: rgba(200, 200, 200, 0.8);
  }
`;

export const MutedLink1 = styled.div`
  font-size: 11px;
  color: rgb(73, 63, 252, 0.7);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: rgba(200, 200, 200, 0.8);
  }
`;

export const BoldLink = styled.span`
  font-size: 11px;
  color: rgb(73, 63, 252);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  &:hover {
    text-decoration: none;
    color: rgb(73, 63, 252, 0.5);
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(73, 63, 252);
  background: linear-gradient(90deg, rgb(130, 114, 247) 0%, rgba(73,63,252,1) 100%);
  &:hover {
    filter: brightness(0.94);
  }
`;