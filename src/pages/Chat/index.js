import React from "react";
import { MdArrowBack, MdSend } from "react-icons/md";

import {
  Container,
  HeaderChat,
  ChatContainer,
  InputGroup,
  ChatContent,
  Thumb,
} from "./styles";

import logo from "../../assets/logo.svg";
import ollie01 from "../../assets/ollie01.svg";

import TextBalloon from "../../components/TextBalloon";

function Chat() {
  return (
    <Container>
      <HeaderChat>
        <a href="/">
          <MdArrowBack size={21} />
          <p>Voltar para o site</p>
        </a>

        <img src={logo} alt="Logo Olist" />
      </HeaderChat>

      <ChatContainer>
        <ChatContent>
          <Thumb>
            <img src={ollie01} alt="" />
          </Thumb>

          <TextBalloon text="Olá, eu sou a Ollie e estou aqui para te ajudar a se cadastrar na plataforma do Olist" />
        </ChatContent>
        <InputGroup>
          <input type="text" placeholder="Seu nome completo" />

          <button>
            <p>Enviar</p>

            <MdSend size={14} color="#fff" />
          </button>
        </InputGroup>
      </ChatContainer>
    </Container>
  );
}

export default Chat;
