import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  ButtonLetGo,
  Options,
} from "./styles";

import NavBar from "../../components/NavBar";
import BotHelp from "../../components/BotHelp";
import Card from "../../components/Card";

import ollie02 from "../../assets/ollie02.svg";
import step2 from "../../assets/step2.svg";
import step3 from "../../assets/step3.svg";
import step4 from "../../assets/step4.svg";
import step5 from "../../assets/step5.svg";
import progressBar from "../../assets/progressBar.svg";

import data from "../../data/data.json";

function Steps() {
  const [countPage, setCountPage] = useState(0);
  const images = [ollie02, step2, step3, step4, step5, ollie02];

  function handleCountPageNext() {
    if (countPage < 6) {
      setCountPage(countPage + 1);
    }
  }

  function handleCountPageBack() {
    if (countPage >= 1) {
      setCountPage(countPage - 1);
    }
  }

  return (
    <Container>
      <NavBar />

      <Content>
        <section>
          <Bot>
            <img src={images[countPage]} alt="" />

            {countPage === 5 ? (
              <img src={progressBar} alt="" id="progress_img" />
            ) : (
              ""
            )}
          </Bot>

          <h2>{data.steps[countPage].title}</h2>

          {countPage === 0 ? (
            <h4>{data.steps[countPage].text}</h4>
          ) : (
            <p>{data.steps[countPage].text}</p>
          )}
        </section>

        {countPage === 5 ? (
          <Options>
            <Card
              title="cadastro individual de produto"
              text="cadastre um anúncio individual para um produto"
              link=""
            />

            <Card
              title="cadastro em massa de produtos"
              text="cadastre um grande volume de anúncios de uma só vez por meio de uma planilha oferecida pelo olist"
              link=""
            />
          </Options>
        ) : (
          ""
        )}

        <Controlls>
          {countPage < 1 ? (
            <BackButton disabled={true}>
              <MdArrowBack size={16} color="#fff" />
            </BackButton>
          ) : (
            <BackButton onClick={handleCountPageBack}>
              <MdArrowBack size={16} color="#fff" />
            </BackButton>
          )}

          {countPage === 5 ? (
            <ButtonLetGo>
              <Link to="/new-product">Vamos lá!</Link>
            </ButtonLetGo>
          ) : (
            <Pagination number={countPage + 1}>
              <CountPage></CountPage>
              <CountPage></CountPage>
              <CountPage></CountPage>
              <CountPage></CountPage>
              <CountPage></CountPage>
            </Pagination>
          )}

          {countPage === 5 ? (
            ""
          ) : (
            <NextButton onClick={handleCountPageNext}>
              <MdArrowForward size={16} color="#fff" />
            </NextButton>
          )}
        </Controlls>
      </Content>

      <BotHelp />
    </Container>
  );
}

export default Steps;
