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

export const Profile = styled.div`
  span {
    display: flex;
    align-items: flex-start;
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
