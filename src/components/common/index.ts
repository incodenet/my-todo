import styled from 'styled-components';

export const Layout = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px 50px;

  @media (max-width: 1336px) {
    max-width: 90vw;
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 8px;
  height: 48px;
  padding: 0 15px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;

  &.large {
    height: 56px;
  }

  &.small {
    height: 32px;
  }

  &.primary {
    background-color: #125c94;
  }

  &.secondary {
    background-color: #e43f5a;
  }

  &:disabled {
    background-color: grey;
    opacity: 0.5;
    cursor: default;
  }
`;

export const Toast = styled.div`
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  margin-top: 25px;
  color: white;
  position: fixed;
  bottom: 25px;
  right: 25px;
  transition: all 0.2s ease;
  transform: translateY(25px);
  opacity: 0;
  visibility: hidden;

  &.success {
    background-color: #18bbb4;
  }

  &.warning {
    background-color: #e43f5a;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
