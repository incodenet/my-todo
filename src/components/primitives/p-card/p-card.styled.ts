import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #cecece;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 11px 15px;
  gap: 20px;
  background-color: white;
`;

export const Title = styled.h3`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  gap: 8px;
  margin: 0;

  a {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;

    &:hover {
      color: #1e88e5;
    }
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
`;

export const Checkbox = styled.label`
  font-weight: 600;
  cursor: pointer;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 15px;
  font-size: 14px;

  input {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
