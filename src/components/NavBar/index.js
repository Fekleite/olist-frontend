import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container, Nav, LinkGroup, DropLink, DropDown } from "./styles";

import logo from "../../assets/logo.svg";

function NavBar() {
  const [dropProduct, setDropProduct] = useState(false);
  const [dropProfile, setDropProfile] = useState(false);

  function handleDropDown(link) {
    if (link === 1) {
      setDropProduct(!dropProduct);
    } else if (link === 2) {
      setDropProfile(!dropProfile);
    }
  }

  return (
    <Container>
      <Nav>
        <img src={logo} alt="Logo olist" />

        <LinkGroup>
          <Link to="/home">início</Link>
          <Link to="/profile">pedidos</Link>

          <DropLink primary={true} onClick={() => handleDropDown(1)}>
            <span>
              produtos
              <MdKeyboardArrowDown size={20} color="#0C29D0" />
            </span>
            {dropProduct && (
              <DropDown>
                <Link to="/new-product">novo produto</Link>
              </DropDown>
            )}
          </DropLink>

          <Link to="/profile">perguntas</Link>
          <Link to="/profile">financeiro</Link>
        </LinkGroup>
      </Nav>

      <DropLink onClick={() => handleDropDown(2)}>
        <span>
          Caroline Camargo <MdKeyboardArrowDown size={20} color="#312F5F" />
        </span>
        {dropProfile && (
          <DropDown>
            <Link to="/profile">minhas conquistas</Link>
          </DropDown>
        )}
      </DropLink>
    </Container>
  );
}

export default NavBar;
