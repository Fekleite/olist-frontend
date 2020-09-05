import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  margin: auto;
  padding: 5.6rem 0;
`;

export const HeaderChat = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--color-primary);

    p {
      margin-left: 0.8rem;
    }
  }

  img {
    width: 12%;
  }
`;

export const ChatContainer = styled.section`
  width: 100%;
  height: 92%;
  margin-top: 3.6rem;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(15, 27, 103, 0.15);
  border-radius: 10px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  width: 100%;
  padding: 1.6rem 2.4rem;
  border: 1px solid #d4d7f2;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 80%;
    height: 75%;
    border: none;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
  }

  button {
    padding: 1.2rem 2.4rem;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    display: flex;
    align-items: center;
    color: #ffffff;
    background: var(--color-primary);
    border-radius: 4px;
    border: none;

    p {
      margin-right: 0.8rem;
    }
  }
`;

export const ChatContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export const Thumb = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;
  background: var(--color-light-blue02);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;
`;
