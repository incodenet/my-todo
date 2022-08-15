import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 12px;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: 25px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px;
  align-items: center;
`;

export const NavTitle = styled.h2`
  font-size: 30px;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const Created = styled.div`
  margin-bottom: 15px;
`;
