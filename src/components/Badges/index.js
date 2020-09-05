import React from "react";

import { Container } from "./styles";

function Badges({ text, children, locked }) {
  return (
    <Container lock={locked}>
      {children}

      <p>{text}</p>
    </Container>
  );
}

export default Badges;
