import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  min-height: inherit;

  a {
    color: white;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
