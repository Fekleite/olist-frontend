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
  margin-top: 6.4rem;
  margin-bottom: 4.4rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--color-text);

    p {
      margin-bottom: 0.4rem;
    }
  }

  h2 {
    margin-top: 4.2rem;
    margin-bottom: 4.8rem;
    font-weight: 600;
    font-size: 2rem;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3.5fr;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
`;

export const Text = styled.div`
  width: 70%;
  margin-left: 0.5rem;

  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 125%;

    strong {
      color: var(--color-primary);
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  border: 1px solid #eaeaf4;
  border-radius: 4px;
  padding: 5.2rem 6.4rem 4.8rem 6.4rem;

  header {
    display: flex;
    margin-bottom: 2rem;

    img {
      width: 113px;
      margin-right: 2rem;
    }
  }

  form {
    width: 78%;
    margin: auto;
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      font-size: 1.2rem;
    }

    button {
      padding: 1.3rem 2.4rem;
      font-weight: bold;
      font-size: 1.4rem;
      color: #fff;
      background: #0dc78b;
      border-radius: 4px;
      border: none;
      align-self: center;
    }
  }
`;

export const ProductText = styled.div`
  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.2rem;
    color: #696d8c;
    margin-bottom: 0.8rem;
  }
`;

export const KeyWords = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;

  span {
    background: #edf4fa;
    border-radius: 4px;
    padding: 0.5rem 0.6rem;
    display: flex;
    align-items: center;
    margin-right: 0.4rem;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const InputGroup = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  #svg {
    margin-top: 2rem;
  }

  input {
    width: 21%;
    border: 1px solid #eaeaf4;
    border-radius: 4px;
    margin-right: 0.8rem;
    padding: 0.8rem 1rem;
    font-weight: 600;
    font-size: 1.2rem;
    color: #312f5f;
  }

  p {
    width: 64%;
    font-size: 1.2rem;
    line-height: 125%;
    color: #696d8c;
  }

  div {
    width: 100px;
    display: flex;
    flex-direction: column;
    margin-right: 0.8rem;
    margin-top: 0.3rem;

    input {
      width: 100%;
      margin-top: 0.8rem;
    }
  }
`;
