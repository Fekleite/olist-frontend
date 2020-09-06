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
  padding: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  h4 {
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;

export const Bot = styled.div`
  position: relative;
  width: 166px;
  height: 166px;
  border-radius: 50%;
  background: var(--color-light-blue02);
  margin-bottom: 1.6rem;
`;

export const Balloon = styled.div`
  position: absolute;
  z-index: 10;
  top: 1.2rem;
  right: -10rem;
  background: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  box-shadow: 0px 4px 5px rgba(49, 47, 95, 0.05);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 0 4rem;
  width: 100%;
`;

export const Controlls = styled.div`
  width: 100%;
  padding: 3.2rem;
  margin-top: 2.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eaeaf4;
`;

export const SkipButton = styled.button`
  background: #ffffff;
  opacity: 0.3;
  border: 1px solid #b6b9d0;
  border-radius: 4px;
  padding: 1.3rem 3.2rem;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NextButton = styled.button`
  background: var(--color-green);
  border: none;
  border-radius: 4px;
  padding: 1.3rem 3.2rem;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }
`;
