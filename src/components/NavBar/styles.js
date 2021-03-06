import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.4rem;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 3.4rem;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 600;
    margin-right: 2.1rem;
    font-size: 1.4rem;
    color: var(--color-text);
  }
`;

export const DropLink = styled.div`
  position: relative;

  span {
    display: flex;
    align-items: flex-start;
    margin-right: ${(props) => (props.primary ? "2.1rem" : 0)};
    font-weight: 600;
    font-size: 1.4rem;
    color: ${(props) => (props.primary ? "var(--color-primary)" : "#312F5F")};
    cursor: pointer;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  width: 16rem;

  a {
    text-decoration: none;
    font-weight: 600;
    margin-right: 2.1rem;
    font-size: 1.4rem;
    color: var(--color-primary);
  }
`;

export const UserLink = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 0.8rem;
    background: transparent;
    border: none;
    color: var(--color-primary);
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  span {
    display: flex;
    align-items: flex-start;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
