import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>talk</Title>

      <Separator />

      <Description>Canal pra conversa</Description>
    </Container>
  );
};

export default ChannelInfo;
