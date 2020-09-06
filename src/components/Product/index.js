import React from "react";

import { Container, Info, Text, Attribute, Brand } from "./styles";

import image from "../../assets/monitor.png";

function Product() {
  return (
    <Container>
      <Info>
        <img src={image} alt="" />

        <Text>
          <h4>Monitor De Lcd 7 Polegadas 2 Canais Av Controle Remoto</h4>
          <p>código de barras 69201911226010</p>
        </Text>
      </Info>

      <Attribute>Monitor - Preto - 7”</Attribute>

      <Brand>Monitor - 7P 7001</Brand>
    </Container>
  );
}

export default Product;
