import React from "react";

import { ChatBot, ChatBalloon, BotImage } from "./styles";

import ollie01 from "../../assets/ollie01.svg";

function BotHelp() {
  return (
    <ChatBot>
      <ChatBalloon>
        <strong>Precisando de ajuda?</strong>
      </ChatBalloon>

      <BotImage>
        <img src={ollie01} alt="" />
      </BotImage>
    </ChatBot>
  );
}

export default BotHelp;
