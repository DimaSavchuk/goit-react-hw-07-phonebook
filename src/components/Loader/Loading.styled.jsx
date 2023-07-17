import styled, { keyframes } from 'styled-components';

export const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid tomato;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Text = styled.div``;
