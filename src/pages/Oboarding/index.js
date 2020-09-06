import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  Bot,
  Cards,
  Controlls,
  SkipButton,
  NextButton,
  Balloon,
} from "./styles";

import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import BotHelp from "../../components/BotHelp";

import ollie02 from "../../assets/ollie02.svg";

function Oboarding() {
  return (
    <Container>
      <NavBar />

      <Content>
        <Bot>
          <img src={ollie02} alt="" />

          <Balloon left={true}>
            Sou a <strong>Ollie</strong>, lembra de mim?
          </Balloon>
        </Bot>

        <h2>bem-vinda Caroline, dê seus primeiro passos com olist!</h2>
        <h4>
          conclua todas as etapas para ativar a sua conta e começar a vender
        </h4>

        <Cards>
          <Card
            title="dados da empresa"
            text="revise e complete os campos para que os pedidos sejam enviados com as informações corretas."
            link="completar dados"
          />

          <Card
            title="dados bancários"
            text="informe a conta bancária pj vinculada ao cnpj para grantir os repasses."
            link="completar dados bancários"
          />

          <Card
            title="assinatura olist"
            text="selecione o melhor plano para você e entre na maior rede de lojistas do país."
            link="confirmar assinatura"
          />
        </Cards>

        <Controlls>
          <SkipButton>Pular essa etapa</SkipButton>
          <NextButton>
            <Link to="/steps">Próximo</Link>
          </NextButton>
        </Controlls>
      </Content>

      <BotHelp />
    </Container>
  );
}

export default Oboarding;
