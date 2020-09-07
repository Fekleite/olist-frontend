import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdCheck, MdInfo } from "react-icons/md";

import {
  Container,
  Content,
  RegisterContainer,
  Description,
  Text,
  FormContainer,
  InputGroup,
} from "./styles";

import NavBar from "../../components/NavBar";
import BotHelp from "../../components/BotHelp";
import Lightbox from "../../components/Lightbox";

import api from "../../services/api";

function ProductRegister() {
  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const token = sessionStorage.getItem("@olist/token");

  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };

  function handleLightbox() {
    setVisibility(!visibility);
  }

  function handleClose(v) {
    setVisibility(!v);
  }

  function handleApi(e) {
    e.preventDefault();

    const apiData = {
      foto: photo,
      titulo: name,
      descricao: brand,
      preco: price,
    };

    api
      .post("produtos", apiData, config)
      .then((res) => {
        console.log(res);
        setVisibility(!visibility);
      })
      .catch((err) => console.log(err));

    console.log(apiData);
  }

  return (
    <Container>
      <NavBar />
      <Lightbox visibility={visibility} close={(e, v) => handleClose} />

      <Content>
        <Link to="/new-product">
          <MdKeyboardArrowLeft size={24} />
          <p>voltar para pesquisa</p>
        </Link>

        <h2 onClick={handleLightbox}>cadastro rápido</h2>

        <RegisterContainer>
          <Description>
            <MdCheck size={20} color="#0DC78B" />

            <Text>
              <h3>Novo produto</h3>

              <p>
                Para cadastrar o produto, preencha as informações solicitadas.
                Tem dúvida sobre o cadastro rápido? <strong>Saiba mais</strong>
              </p>
            </Text>
          </Description>

          <FormContainer>
            {/* <header>
              <img src={image} alt="" />

              <ProductText>
                <h3>Monitor De Lcd 7 Polegadas 2 Canais Av Controle Remoto</h3>

                <KeyWords>
                  <span>Monitor</span>
                  <span>Preto</span>
                  <span>7"</span>
                </KeyWords>

                <p>Monitor - 7P 7001 </p>
                <p>69201911226010 </p>
              </ProductText>
            </header> */}

            <form onSubmit={handleApi}>
              <label htmlFor="name">nome*</label>
              <InputGroup>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </InputGroup>

              <label htmlFor="img_url">url da foto*</label>
              <InputGroup>
                <input
                  type="url"
                  id="img_url"
                  name="img_url"
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </InputGroup>

              <label htmlFor="price">preço*</label>
              <InputGroup>
                <input
                  type="text"
                  id="price"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input type="text" id="promotionPrice" name="promotionPrice" />
                <MdInfo color="#EAEAF4" />
              </InputGroup>

              <label htmlFor="stock">estoque*</label>
              <InputGroup>
                <input type="number" id="stock" name="stock" />
                <MdInfo color="#EAEAF4" />
              </InputGroup>

              <label htmlFor="extraTerm">prazo operacional extra*</label>
              <InputGroup>
                <input type="number" id="extraTerm" name="extraTerm" />
                <p>
                  Apenas insira um prazo operacional extra se realmente precisar
                  de tempo adicional para operar este produto. O prazo extra irá
                  refletir no cálculo da data de entrega para o consumidor
                  final. Saiba mais
                </p>
              </InputGroup>

              <label>medidas do pacote*</label>
              <InputGroup>
                <div>
                  <label htmlFor="length">comprimento</label>
                  <input type="number" id="length" name="length" />
                </div>

                <div>
                  <label htmlFor="width">largura</label>
                  <input type="number" id="width" name="width" />
                </div>

                <div>
                  <label htmlFor="height">altura</label>
                  <input type="number" id="height" name="height" />
                </div>

                <div>
                  <label htmlFor="weight">peso</label>
                  <input type="number" id="weight" name="weight" />
                </div>

                <MdInfo id="svg" color="#EAEAF4" />
              </InputGroup>

              <label htmlFor="capacity">capacidade do pacote*</label>
              <InputGroup>
                <input type="number" id="capacity" name="capacity" />
                <p>
                  Informe quantas unidade deste produto cabem neste pacote. Ex:
                  6 uncidades por pacote
                </p>
              </InputGroup>

              <label htmlFor="code">meu codigo*</label>
              <InputGroup>
                <input type="text" id="code" name="code" />
                <MdInfo color="#EAEAF4" />
              </InputGroup>

              <button type="submit">vender este produto</button>
            </form>
          </FormContainer>
        </RegisterContainer>
      </Content>

      <BotHelp />
    </Container>
  );
}

export default ProductRegister;
