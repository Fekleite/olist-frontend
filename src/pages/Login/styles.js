import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 2fr;
`;

export const Info = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5.6rem;
  position: relative;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }

  p {
    color: var(--color-secondary);
    font-weight: 600;
  }
`;

export const Wave = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: #0f1b67;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: auto;
  background: #fff;
  border-radius: 4px;
  padding: 4.8rem 4.8rem 3.2rem 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 8rem;
    margin-bottom: 2.4rem;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 30rem;
      height: 4.2rem;
      margin: 0.8rem 0 1.6rem 0;
      border: 1px solid #babac2;
      border-radius: 2px;
      padding: 0 1.6rem;
      font-size: 1.4rem;
      color: var(--color-text);
    }

    button {
      padding: 1.2rem 4.8rem;
      margin: auto;
      background: var(--color-green);
      color: #fff;
      border-radius: 4px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.6rem;
      margin-top: 0.8rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: var(--color-primary);
        font-size: 1.4rem;
      }
    }
  }
`;

export const RegisterLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  font-size: 1.5rem;

  p {
    margin-right: 0.4rem;
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
  }
`;

export const Bot = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--color-light-blue02);
  margin-bottom: 1.6rem;

  img {
    width: 100%;
  }
`;
