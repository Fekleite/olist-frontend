import React, { useState } from "react";
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
import step2 from "../../assets/step2.svg";
import step3 from "../../assets/step3.svg";
import step4 from "../../assets/step4.svg";
import step5 from "../../assets/step5.svg";
import progressBar from "../../assets/progressBar.svg";

import data from "../../data/data.json";

function Steps() {
  const [countPage, setCountPage] = useState(0);
  const images = [
    ollie02,
    step2,
    step3,
    step3,
    step4,
    step5,
    { ollie02, progressBar },
  ];

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
        <Bot>
          <img src={images[countPage]} alt="" />
        </Bot>

        <h2>{data.steps[countPage].title}</h2>
        <h4>{data.steps[countPage].text}</h4>

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

          <Pagination number={countPage + 1}>
            <CountPage></CountPage>
            <CountPage></CountPage>
            <CountPage></CountPage>
            <CountPage></CountPage>
            <CountPage></CountPage>
          </Pagination>

          {countPage === 5 ? (
            <NextButton disabled={true}>
              <MdArrowForward size={16} color="#fff" />
            </NextButton>
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
