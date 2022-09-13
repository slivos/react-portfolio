import styled from 'styled-components';

export const NavPanel = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5em;
  background-color: transparent;
  border-bottom: ${({ lightTheme }) =>
    lightTheme ? '4px solid #21E6C1' : '4px solid #fff208'};
  border-radius: 0px 10px;
`;

export const Logo = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
  color: ${({ lightTheme }) => (lightTheme ? '#00818A' : '#00ffdb')};

  @media (max-width: 380px) {
    font-size: 1.5rem;
  }
`;

export const ThemeModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  & svg {
    cursor: pointer;
  }
`;
