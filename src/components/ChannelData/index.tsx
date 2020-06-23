import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author={"vinaciotm"}
          date={"23/06/2020"}
          content={
            <>
              <Mention>@beutrano</Mention>, ta aí cara?
            </>
          }
          hasMention={true}
        />

        <ChannelMessage
          author={"beutrano"}
          date={"23/06/2020"}
          content={"sim, sim, vou ficar por aqui hoje"}
          hasMention={false}
        />

        <ChannelMessage
          author={"vinaciotm"}
          date={"23/06/2020"}
          content={"E aí, vcs curtem react?"}
          hasMention={false}
        />

        <ChannelMessage
          author={"fulano"}
          date={"23/06/2020"}
          content={"sim. É top demais"}
          hasMention={false}
        />

        <ChannelMessage
          author={"ciclano"}
          date={"23/06/2020"}
          content={"Ah, eu to aprendendo ainda"}
          hasMention={false}
        />

        <ChannelMessage
          author={"vinaciotm"}
          date={"23/06/2020"}
          content={"Muito massa, agora to praticando umas coisas novas"}
          hasMention={false}
        />

        <ChannelMessage
          author={"fulano"}
          date={"23/06/2020"}
          content={
            <>
              <Mention>@vinaciotm</Mention>, O que tu fez aí?
            </>
          }
          hasMention={true}
        />

        <ChannelMessage
          author={"vinaciotm"}
          date={"23/06/2020"}
          content={
            "Recriei o Discord para estudar interface visual e typescript."
          }
          hasMention={false}
        />

        <ChannelMessage
          author={"ciclano"}
          date={"23/06/2020"}
          content={
            <>
              <Mention>@vinaciotm</Mention>, sério?
            </>
          }
          hasMention={true}
        />

        <ChannelMessage
          author={"vinaciotm"}
          date={"23/06/2020"}
          content={
            <>
              <Mention>@ciclano</Mention>, sério.! Saca só
            </>
          }
        />

        <ChannelMessage
          author={"robocop"}
          date={"23/06/2020"}
          content={"Hey, there. I'm here"}
          isBot={true}
        />
      </Messages>

      <InputWrapper>
        <Input type={"text"} placeholder={"Conversar em #talk"} />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
