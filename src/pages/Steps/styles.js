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
  min-height: 85vh;
  margin: auto;
  margin-top: 2.3rem;
  background: #fff;
  box-shadow: 0px 4px 20px rgba(15, 27, 103, 0.15);
  border-radius: 10px;
  padding: 6.4rem 4rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-weight: 600;
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
  }

  h4 {
    font-weight: normal;
    font-size: 1.8rem;
    text-align: center;
  }

  p {
    font-weight: normal;
    font-size: 1.8rem;
    text-align: left;
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

  #progress_img {
    position: absolute;
    top: 40px;
    left: 140px;
  }
`;

export const Controlls = styled.div`
  width: 100%;
  padding: 3.2rem;
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
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;

  div:nth-child(${(props) => props.number}) {
    background: #0dc78b;
    width: 16px;
    height: 16px;
    box-shadow: 0px 4px 5px rgba(49, 47, 95, 0.1);
  }
`;

export const CountPage = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #eaeaf4;
  margin: 0 0.8rem;
`;

export const ButtonLetGo = styled.button`
  background: #0c29d0;
  border-radius: 4px;
  padding: 13px 32px;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  border: none;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.6rem;
`;
