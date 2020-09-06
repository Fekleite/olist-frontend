import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  SearchContainer,
  Search,
  AddNewProduct,
  Text,
  Results,
  NumberResults,
  Header,
  Products,
} from "./styles";

import NavBar from "../../components/NavBar";
import BotHelp from "../../components/BotHelp";
import Product from "../../components/Product";

function NewProduct() {
  return (
    <Container>
      <NavBar />

      <Content>
        <SearchContainer>
          <Search>
            <h2>novo produto</h2>

            <h3>qual produto deseja vender?</h3>
            <p>
              Busque em nosso catálogo por título, marca ou código de barras o
              produto que deseja vender
            </p>

            <input type="text" placeholder="ex: Monitor LED 27 LG 4k" />
          </Search>

          <AddNewProduct>
            <p>não encontrou o produto?</p>

            <button>
              <Link to="/steps">Cadastrar novo produto</Link>
            </button>
          </AddNewProduct>
        </SearchContainer>

        <Text>
          Caso não encontre, você poderá fazer um novo cadastro a seguir.
        </Text>

        <Results>
          <NumberResults>1 produto encontrado</NumberResults>

          <Header>
            <h4>produtos</h4>
            <h4>atributos</h4>
            <h4>marca</h4>
          </Header>

          <Products>
            <Product />
            <Product />
          </Products>
        </Results>
      </Content>

      <BotHelp />
    </Container>
  );
}

export default NewProduct;
