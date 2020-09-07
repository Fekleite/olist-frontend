import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.visibility ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(12, 41, 208, 0.2);
`;

export const Content = styled.div`
  height: auto;
  width: 610px;
  background: #ffffff;
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem;

  h2 {
    font-weight: 600;
    font-size: 2.4rem;
    margin-top: 3.2rem;
  }

  p {
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    margin-top: 2.3rem;
  }

  a {
    font-weight: 600;
    font-size: 1.4rem;
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    color: #312f5f;
    text-decoration: none;
    border: 1px solid #b6b9d0;
    border-radius: 4px;
    cursor: pointer;
    padding: 1.3rem 2.3rem;
  }
`;

export const Close = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  margin-top: 0.8rem;
  width: 160px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const Confirm = styled.button`
  background: var(--color-green);
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1.4rem;
  padding: 1.3rem 2.3rem;
  margin-top: 5.4rem;
  cursor: pointer;
`;
