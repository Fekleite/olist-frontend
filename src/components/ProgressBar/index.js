import React from "react";

import { Container, CircleStart, CircleEnd, Bar } from "./styles";

import check from "../../assets/check.svg";
import trophy from "../../assets/trophy.svg";

function ProgressBar() {
  return (
    <Container>
      <CircleStart>
        <img src={check} alt="" />
      </CircleStart>
      <Bar>
        <span></span>
        <span></span>
        <span></span>
      </Bar>
      <CircleEnd>
        <img src={trophy} alt="" />
      </CircleEnd>
    </Container>
  );
}

export default ProgressBar;
