import styled from 'styled-components';
import { ContainerAbout, H2 } from '../About/About.styled';

export const ContainerContact = styled(ContainerAbout)`
  left: 66.66%;
  height: 25%;

  @media (max-width: 1340px) {
    height: auto;
  }
`;

export const H2Contact = styled(H2)`
  margin-top: 0;
`;

export const SocialWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & a {
    margin-right: 20px;
  }

  @media (max-width: 1340px) {
    justify-content: space-evenly;

    & a {
      margin-right: 0;
    }
  }
`;
