import styled from 'styled-components';

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.color.tangerine};
  border-top: 16px solid ${({ theme }) => theme.color.darkerGray};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`; 

export {
  SpinnerContainer,
  Spinner,
};
