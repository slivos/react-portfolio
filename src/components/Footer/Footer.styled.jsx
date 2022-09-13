import styled from 'styled-components';

export const FooterElement = styled.footer`
  width: 100%;
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
    color: ${({ lightTheme }) => (lightTheme ? '#00818A' : 'white')};
  }

  @media (max-width: 380px) {
    font-size: 0.8rem;
  }
`;
