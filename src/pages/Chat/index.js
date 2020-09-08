import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdArrowBack, MdSend } from "react-icons/md";

import {
  Container,
  HeaderChat,
  ChatContainer,
  InputGroup,
  ChatContent,
  Thumb,
  Back,
  BotTalk,
  UserTalk,
  ThumbUser,
} from "./styles";

import logo from "../../assets/logo.svg";
import ollie01 from "../../assets/ollie01.svg";
import profile from "../../assets/profile.svg";

import TextBalloon from "../../components/TextBalloon";
import UserBalloon from "../../components/UserBalloon";

import { talksBot, categories } from "../../utils/chatbot";

import api from "../../services/api";

function Chat() {
  const [ask, setAsk] = useState(0);
  const [respUser, setRespUser] = useState(true);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("••••••");
  const [userData, setUserData] = useState([]);

  const [red, setRed] = useState(false);

  function handleRegister() {
    const valueInput = document.getElementsByName("resp")[0].value;
    console.log(talksBot[ask], ask);

    if (ask < 3 && ask !== 9) {
      document.getElementById("resp").value = "";
    }

    if (ask === 9) {
      const element = [];
      const number = String(valueInput).split("").length;
      for (let index = 0; index < number; index++) {
        element.push("•");
      }

      const mask = element.join("");
      setPass(mask);
    }

    setName(valueInput);
    setUserData([...userData, valueInput]);
    console.log(userData);
    setRespUser(false);

    setTimeout(() => {
      setRespUser(true);
      setAsk(ask + 1);
    }, 3000);
  }

  function handleApi() {
    const apiData = {
      password: userData[userData.length - 1],
      email: userData[1],
      cnpj: userData[2],
      nome: userData[0],
      produtos: userData[3],
    };

    api
      .post("cadastro", apiData)
      .then((res) => {
        console.log(res);
        alert("Usuário cadastrado com sucesso!");
        setRed(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Não foi possível cadastrar o usuário!");
      });

    console.log(apiData);
  }

  return (
    <Back>
      <Container>
        {red && <Redirect to="/" />}
        <HeaderChat>
          <Link to="/">
            <MdArrowBack size={21} />
            <p>Voltar para o site</p>
          </Link>

          <img src={logo} alt="Logo Olist" />
        </HeaderChat>

        <ChatContainer>
          <ChatContent>
            {ask === 0 ? (
              <>
                <BotTalk>
                  <Thumb>
                    <img src={ollie01} alt="" />
                  </Thumb>

                  <TextBalloon text={talksBot[0].text} />
                </BotTalk>

                <BotTalk>
                  <Thumb>
                    <img src={ollie01} alt="" />
                  </Thumb>

                  <TextBalloon text={talksBot[1].text} />
                </BotTalk>
              </>
            ) : (
              <BotTalk>
                <Thumb>
                  <img src={ollie01} alt="" />
                </Thumb>

                <TextBalloon text={talksBot[ask + 1].text} />
              </BotTalk>
            )}

            {ask === 0 ? (
              <UserTalk disabled={respUser}>
                <UserBalloon text={name} />
                <ThumbUser>
                  <img src={profile} alt="" />
                </ThumbUser>
              </UserTalk>
            ) : ask === 9 ? (
              <UserTalk disabled={respUser}>
                <UserBalloon text={pass} />
                <ThumbUser>
                  <img src={profile} alt="" />
                </ThumbUser>
              </UserTalk>
            ) : (
              <UserTalk disabled={respUser}>
                <UserBalloon text={userData[ask]} />
                <ThumbUser>
                  <img src={profile} alt="" />
                </ThumbUser>
              </UserTalk>
            )}
          </ChatContent>

          <InputGroup>
            {ask === 3 ? (
              <select name="resp" id="resp" defaultValue="Sim">
                {categories.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            ) : ask > 3 && ask < 9 ? (
              <select name="resp" id="resp" defaultValue="Sim">
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            ) : ask === 9 ? (
              <input type="password" name="resp" id="resp" />
            ) : ask === 10 ? (
              ""
            ) : (
              <input type="text" name="resp" id="resp" />
            )}

            {ask === 10 ? (
              <button onClick={handleApi}>
                <p>Finalizar cadastro</p>
              </button>
            ) : (
              <button onClick={handleRegister}>
                <p>Enviar</p>

                <MdSend size={14} color="#fff" />
              </button>
            )}
          </InputGroup>
        </ChatContainer>
      </Container>
    </Back>
  );
}

export default Chat;
