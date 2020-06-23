import styled from "styled-components";
import { AlternateEmail } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  padding: 16px;
`;

export const Input = styled.input`
  position: relative;

  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;

  background-color: var(--chat-input);
  color: var(--white);

  font-size: 14px;

  &::placeholder {
    color: var(--gray);
  }
`;

export const InputIcon = styled(AlternateEmail)`
  position: absolute;

  top: 24px;
  left: 24px;

  width: 24px;
  height: 24px;

  color: var(--gray);

  transition: 180ms ease-in-out;
`;
