import styled from "styled-components";

export const Container = styled.div`
  width: 56rem;
  height: 4rem;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;

  span {
    width: 32.5%;
    height: 8px;
    background: #dee1ff;
  }

  span:first-child {
    background: linear-gradient(90deg, #0c29d0 0%, #091b82 100%);
  }
`;

export const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CircleStart = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: var(--color-light-blue);
  border: 1px solid var(--color-primary);
  box-shadow: 0px 4px 5px rgba(49, 47, 95, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleEnd = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  background: var(--color-light-blue);
  border: 1px solid var(--color-primary);
  box-shadow: 0px 4px 5px rgba(49, 47, 95, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
