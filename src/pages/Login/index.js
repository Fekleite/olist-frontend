import React, { useState } from "react";
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

import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleApi(e) {
    e.preventDefault();

    const apiData = {
      username: email,
      password: pass,
    };

    api
      .post("login", apiData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    console.log(apiData);
  }

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

          <form onSubmit={handleApi}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ex: seunome@email.com.br"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPass(e.target.value)}
            />

            <button type="submit">entrar</button>
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
