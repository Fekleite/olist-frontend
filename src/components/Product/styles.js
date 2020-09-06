import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  border-top: 1px solid #eaeaf4;
  padding: 1.3rem 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  margin-left: 2.4rem;
  h4 {
    margin-bottom: 1.6rem;
  }
`;

export const Attribute = styled.h4`
  margin-top: 0.8rem;
`;

export const Brand = styled.h4`
  margin-top: 0.8rem;
`;
