import React from "react";

import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName={"talk"} selected={true} />
      <ChannelButton channelName={"meet"} />
      <ChannelButton channelName={"files"} />
      <ChannelButton channelName={"afk"} />
    </Container>
  );
};

export default ChannelList;
