import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  gap: 15px;
`;

export const FilterPanel = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  gap: 15px;

  @media (max-width: 767px) {
    grid-auto-flow: row;
    grid-template-columns: auto;
    gap: 5px;
    margin-bottom: 30px;
  }
`;

export const Filter = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 15px;

  @media (max-width: 560px) {
    grid-auto-flow: row;
    grid-template-columns: auto;
    gap: 5px;
  }
`;

export const Empty = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  gap: 15px;
  margin: 80px 0;
`;
