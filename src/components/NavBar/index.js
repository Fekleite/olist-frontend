import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container, Nav, LinkGroup, DropLink } from "./styles";

import logo from "../../assets/logo.svg";

function NavBar() {
  return (
    <Container>
      <Nav>
        <img src={logo} alt="Logo olist" />

        <LinkGroup>
          <Link to="/profile">início</Link>
          <Link to="/profile">pedidos</Link>

          <DropLink primary={true}>
            <span>
              produtos
              <MdKeyboardArrowDown size={20} color="#0C29D0" />
            </span>
          </DropLink>

          <Link to="/profile">perguntas</Link>
          <Link to="/profile">financeiro</Link>
        </LinkGroup>
      </Nav>

      <DropLink>
        <span>
          Caroline Camargo <MdKeyboardArrowDown size={20} color="#312F5F" />
        </span>
      </DropLink>
    </Container>
  );
}

export default NavBar;
