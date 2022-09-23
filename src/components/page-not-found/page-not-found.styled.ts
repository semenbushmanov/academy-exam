import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  
  a {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

const FirstHeading = styled.h1`
  color: ${({ theme }) => theme.color.tangerine};
`; 

const SecondHeading = styled.h1`
  color: ${({ theme }) => theme.color.white};
`;

export {
  PageContainer,
  FirstHeading,
  SecondHeading,
};
