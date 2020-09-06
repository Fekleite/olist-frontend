import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import {
  Container,
  Content,
  Bot,
  Controlls,
  BackButton,
  NextButton,
  Pagination,
  CountPage,
} from "./styles";

import NavBar from "../../components/NavBar";
import BotHelp from "../../components/BotHelp";

import ollie02 from "../../assets/ollie02.svg";

function Steps() {
  return (
    <Container>
      <NavBar />

      <Content>
        <Bot>
          <img src={ollie02} alt="" />
        </Bot>

        <h2>
          já sabe como o olist consegue te ajudar a vender mais e ter
          visibilidade?
        </h2>
        <h4>
          passe para o lado e dá uma olhada em tudo que você vai encontrar na
          plataforma
        </h4>

        <Controlls>
          <BackButton disabled={true}>
            <MdArrowBack size={16} color="#fff" />
          </BackButton>
          <Pagination>
            <CountPage selected={true}></CountPage>
            <CountPage></CountPage>
            <CountPage></CountPage>
            <CountPage></CountPage>
            <CountPage></CountPage>
          </Pagination>
          <NextButton>
            <MdArrowForward size={16} color="#fff" />
          </NextButton>
        </Controlls>
      </Content>

      <BotHelp />
    </Container>
  );
}

export default Steps;
