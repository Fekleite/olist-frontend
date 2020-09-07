import React, { useState } from "react";
import { MdKeyboardArrowDown, MdExitToApp } from "react-icons/md";
import { Link, Redirect } from "react-router-dom";

import {
  Container,
  Nav,
  LinkGroup,
  DropLink,
  DropDown,
  UserLink,
} from "./styles";

import logo from "../../assets/logo.svg";

function NavBar() {
  const [dropProduct, setDropProduct] = useState(false);
  const [dropProfile, setDropProfile] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const name = localStorage.getItem("@olist/username");

  function hadleLogOut() {
    localStorage.removeItem("@olist/username");
    sessionStorage.removeItem("@olist/token");
    setLogOut(true);
  }

  function handleDropDown(link) {
    if (link === 1) {
      setDropProduct(!dropProduct);
    } else if (link === 2) {
      setDropProfile(!dropProfile);
    }
  }

  return (
    <Container>
      {logOut && <Redirect to="/" />}
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
      <UserLink>
        <DropLink onClick={() => handleDropDown(2)}>
          <span>
            {name} <MdKeyboardArrowDown size={20} color="#312F5F" />
          </span>
          {dropProfile && (
            <DropDown>
              <Link to="/profile">minhas conquistas</Link>
            </DropDown>
          )}
        </DropLink>

        <button onClick={hadleLogOut}>
          <MdExitToApp size={24} />
        </button>
      </UserLink>
    </Container>
  );
}

export default NavBar;
