import styled from "styled-components";

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
