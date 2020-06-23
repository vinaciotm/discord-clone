import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname={"Robocop"} isBot />
      <UserRow nickname={"Inácio Pires"} />

      <Role>Offline - 15</Role>
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
      <UserRow nickname={"Fulano de tal"} />
    </Container>
  );
};

export default UserList;
