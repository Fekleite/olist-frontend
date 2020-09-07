import React from "react";
import { MdCheck, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

function Card({ title, text, link }) {
  return (
    <Container>
      <Content>
        <span>
          <MdCheck size={9} color="#fff" />
        </span>

        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </Content>

      <Link to="/profile">
        {link}{" "}
        {link !== "" ? <MdKeyboardArrowRight size={20} color="#0C29D0" /> : ""}
      </Link>
    </Container>
  );
}

export default Card;
