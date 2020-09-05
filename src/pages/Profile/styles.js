import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Achievements = styled.section`
  width: 100%;
  margin-top: 5rem;

  h2 {
    font-size: 2.4rem;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  border: 1px solid #eaeaf4;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;

  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--color-primary);
  }
`;

export const Photo = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: var(--color-light-blue02);
  border: 2px solid var(--color-primary);
  box-shadow: 0px 4px 5px rgba(49, 47, 95, 0.05);
  position: relative;
  margin-bottom: 1.6rem;

  img {
    width: 100%;
    position: absolute;
    bottom: -3px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2.4rem;

  p {
    font-weight: normal;
    font-size: 1.4rem;
  }

  p:last-child {
    color: var(--color-green);
  }

  span {
    margin: 0 0.8rem;
  }
`;

export const Insights = styled.section`
  width: 100%;
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BadgesContainer = styled.section`
  width: 100%;
  margin: 3.2rem 0;
  border-top: 1px solid #eaeaf4;
  padding-top: 3.2rem;

  h2 {
    font-size: 2.4rem;
  }
`;

export const Gallery = styled.div`
  margin-top: 3.2rem;
  padding: 2.4rem;
  border: 1px solid #eaeaf4;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-primary);
    border-radius: 4px;
    padding: 0.8rem;
  }
`;

export const BadgesGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3.2rem;
  margin: 0 8rem;
`;
