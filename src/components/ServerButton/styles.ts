import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  position: relative;
  display: flex;

  flex-shrink: 0;
  justify-content: "center";
  align-items: "center";

  border-radius: 50%;

  height: 48px;
  width: 48px;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? "var(--nothorse)" : "var(--primary)"};

  cursor: pointer;

  > img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }

  &::before {
    position: absolute;
    content: "";

    width: 9px;
    height: 9px;

    border-radius: 50%;

    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);

    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }

  &::after {
    position: absolute;
    content: '${(props) => props.mentions && props.mentions}';
    
    display: ${(props) => (props.mentions ? "inline" : "none")};
  
    bottom: -4px;
    right: -4px;

    width: auto;
    height: 16px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    background-color: var(--notification);

    padding: 0 4px;

    text-align: right;

    font-size: 13px;
    font-weight: bold;
    color: var(--white);
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--nothorse)" : "var(--discord)"};
  }
`;
