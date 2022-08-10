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
`;

export const Filter = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 15px;
`;

export const Empty = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  gap: 15px;
  margin: 80px 0;
`;
