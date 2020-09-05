import React from "react";

import { Container } from "./styles";

function InsightItem({ title, children }) {
  return (
    <Container>
      <h4>{title}</h4>
      <p>{children}</p>
    </Container>
  );
}

export default InsightItem;
