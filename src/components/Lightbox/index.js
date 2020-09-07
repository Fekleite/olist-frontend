import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { Container, Content, ImageContainer, Confirm, Close } from "./styles";

import firstProduct from "../../assets/firstProduct.svg";

function Lightbox({ visibility, close }) {
  return (
    <Container visibility={visibility}>
      <Content>
        <Close onClick={close(!visibility)}>
          <MdClose size={24} color="#312F5F" />
        </Close>

        <ImageContainer>
          <img src={firstProduct} alt="" />
        </ImageContainer>

        <h2>Eba, você cadastrou seu primeiro produto!</h2>

        <p>
          Cadastre mais 4 produtos para melhorar a visibilidade de seus
          anúncios, se tornar mais competitivo e vender cada vez mais.
        </p>

        <Confirm onClick={close(!visibility)}>cadastrar mais produtos</Confirm>

        <Link to="/profile" onClick={close(!visibility)}>
          Ver minhas conquistas
        </Link>
      </Content>
    </Container>
  );
}

export default Lightbox;
