import styled from 'styled-components';
import { ContainerAbout, Wrapper, H2 } from '../About/About.styled';

export const ContainerContact = styled(ContainerAbout)`
  left: 66.66%;
  height: 25%;

  @media (max-width: 1340px) {
    height: auto;
  }
`;

export const WrapperContact = styled(Wrapper)`
  text-align: center;
  @media (max-width: 380px) {
    & div:first-child {
      word-break: break-word;
    }
  }
`;

export const H2Contact = styled(H2)`
  margin-top: 0;

  @media (max-width: 190px) {
    & {
      word-break: break-word;
      text-align: center;
    }
  }
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
