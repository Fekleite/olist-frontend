import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  position: relative;
`;

export const Content = styled.div`
  width: 76%;
  margin: auto;
  margin-top: 2.3rem;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(15, 27, 103, 0.15);
  border-radius: 10px;
  padding: 6.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }

  h4 {
    font-weight: normal;
    font-size: 1.6rem;
  }
`;

export const Bot = styled.div`
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: var(--color-light-blue02);
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const Controlls = styled.div`
  width: 100%;
  padding: 3.2rem;
  margin-top: 16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eaeaf4;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-primary);
  border-radius: 4px;
  border: none;
  padding: 0.8rem;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-primary);
  border-radius: 4px;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
`;

export const CountPage = styled.div`
  width: ${(props) => (props.selected ? "16px" : "10px")};
  height: ${(props) => (props.selected ? "16px" : "10px")};
  border-radius: 50%;
  background: ${(props) => (props.selected ? " #0dc78b" : "#eaeaf4")};
  margin: 0 0.8rem;
  box-shadow: ${(props) =>
    props.selected ? " 0px 4px 5px rgba(49, 47, 95, 0.1)" : "none"};
`;

export const ChatBot = styled.div`
  position: fixed;
  bottom: 3.2rem;
  right: 3.2rem;
  display: flex;
  align-items: center;
`;

export const ChatBalloon = styled.div`
  background: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  box-shadow: 0px 4px 5px rgba(49, 47, 95, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-right: 0.8rem;
`;

export const BotImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f5f6ff;
  box-shadow: 0px 4px 5px rgba(49, 47, 95, 0.1);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;
