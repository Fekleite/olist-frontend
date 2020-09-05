import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    margin-top: 0.8rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: ${(props) => (props.lock ? "#696D8C" : "#312F5F")};
    opacity: ${(props) => (props.lock ? 0.3 : 1)};
  }
`;
