import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 5.6rem;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  margin: 2.4rem 0;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

export const Search = styled.div`
  h2 {
    font-weight: 600;
    font-size: 2rem;
  }

  h3 {
    font-weight: 600;
    margin-top: 4.2rem;
    font-size: 2.8rem;
  }

  p {
    font-weight: 600;
    font-size: 1.4rem;
    margin: 2.4rem 0;
  }

  input {
    width: 88%;
    border: 1px solid #eaeaf4;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(49, 47, 95, 0.05);
    border-radius: 4px;
    padding: 1.6rem;
    font-weight: 600;
    font-size: 1.6rem;
    color: #696d8c;
  }
`;

export const AddNewProduct = styled.div`
  align-self: flex-end;
  justify-self: flex-end;

  p {
    font-size: 1.4rem;
    font-weight: 600;
  }

  button {
    padding: 1.6rem 4.8rem;
    background: var(--color-green);
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    a {
      font-weight: bold;
      font-size: 1.6rem;
      color: #ffffff;
      text-decoration: none;
    }
  }
`;

export const Results = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export const NumberResults = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const Header = styled.div`
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
