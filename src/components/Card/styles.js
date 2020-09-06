import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #eaeaf4;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  margin-bottom: 1.6rem;

  a {
    font-weight: 600;
    font-size: 1.4rem;
    display: flex;
    align-items: flex-start;
    color: var(--color-primary);
    text-decoration: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-green);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.6rem;
  }

  div {
    h3 {
      font-weight: 600;
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
