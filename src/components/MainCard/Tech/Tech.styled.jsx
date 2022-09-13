import styled from 'styled-components';
import { ContainerAbout, Wrapper, H2 } from '../About/About.styled';

export const ContainerTech = styled(ContainerAbout)`
  left: 33.33%;
  height: 50%;

  @media (max-width: 1340px) {
    height: auto;
  }
`;

export const WrapperTech = styled(Wrapper)`
  width: 20em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const H2Tech = styled(H2)`
  margin-top: 0;

  @media (max-width: 1340px) {
    margin: 0 0 2.5rem;
  }
`;
