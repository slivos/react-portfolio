import styled from 'styled-components';

export const ContainerAbout = styled.div`
  width: 33.33%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2.5%;
  left: 0;
  transform: translateX(-100%);
  opacity: 0;

  @media (max-width: 1340px) {
    width: 90vw;
    height: auto;
    position: unset;
    border-radius: 24px;
  }

  @media (max-width: 380px) {
    width: 85vw;
  }

  @media (max-height: 880px) {
    bottom: 5%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1em 1em;
  line-height: 2.9rem;
  font-size: 1.375rem;

  @media (max-width: 1340px) {
    height: auto;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  @media (max-width: 380px) {
    line-height: 2.6rem;
  }
`;

export const H2 = styled.h2`
  font-size: 3rem;
  margin: 1.5rem 0 1rem;
  color: #00ffdb;

  @media (max-width: 1340px) {
    font-size: 2.5rem;
  }

  @media (max-width: 380px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;
