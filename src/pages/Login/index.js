import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Info,
  Content,
  FormContainer,
  RegisterLink,
  Bot,
  Wave,
} from "./styles";

import logo from "../../assets/logo.svg";
import ollie02 from "../../assets/ollie02.svg";
import wave from "../../assets/wave.svg";

function Login() {
  return (
    <Container>
      <Info>
        <Bot>
          <img src={ollie02} alt="" />
        </Bot>

        <h2>conheça a Ollie a nova robô olist</h2>
        <p>
          Acesse sua conta do olist e a Ollie te guiará na jornada para se
          tornar o melhor vendedor.
        </p>

        <Wave>
          <img src={wave} alt="" />
        </Wave>
      </Info>

      <Content>
        <FormContainer>
          <img src={logo} alt="" />

          <form action="">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ex: seunome@email.com.br"
            />

            <div>
              <label htmlFor="pass">senha</label>
              <span>redefinir senha</span>
            </div>
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="sua senha"
            />

            <button>entrar</button>
          </form>

          <RegisterLink>
            <p>Não é um cliente olist? </p>
            <Link to="/register">Crie sua conta.</Link>
          </RegisterLink>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default Login;