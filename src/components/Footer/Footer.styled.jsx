import styled from 'styled-components';

export const FooterElement = styled.footer`
  width: 100%;
  padding: 0 1rem;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
  font-weight: 700;
  color: #ff2965;
  background-color: transparent;

  & small span {
    color: ${({ lightTheme }) => (lightTheme ? '#08085E' : 'white')};
  }

  @media (max-width: 380px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;
