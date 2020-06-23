import React from "react";

import ServerName from "../ServerName";
import ServerList from "../ServerList";

import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import ChannelData from "../ChannelData";

import UserInfo from "../UserInfo";
import UserList from "../UserList";

import { Grid } from "./styles";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerName />
      <ServerList />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
