import styled from "styled-components";

import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
  }

  > div span {
    margin-left: 5px;
    font-size: 15px;
    color: var(--senary);
  }

  & > div:last-child {
    opacity: 0;
    transition: opacity 0.2s;
  }

  &.active,
  &:hover {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div:last-child {
      opacity: 1;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  height: 20px;
  width: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  margin-left: 4px;

  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s, opacity 0.2;

  &:hover {
    color: var(--white);
  }
`;
