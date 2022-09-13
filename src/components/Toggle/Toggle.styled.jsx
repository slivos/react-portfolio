import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;
    transition: all 0.3s linear;
    stroke: ${({ lightTheme }) => (lightTheme ? '#08085E' : '#FFCC33')};
  }
`;
