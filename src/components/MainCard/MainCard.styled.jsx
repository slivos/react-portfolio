import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1340px) {
    min-height: 100vh;
    height: unset;
    margin: 30px 0px;
  }

  @media (max-height: 880px) {
    margin: 10px 0px;
  }

  @media (max-height: 750px) {
    min-height: 100vh;
    height: unset;
    margin: 30px 0;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 50em;
  position: relative;
  background-color: #091a28;
  border-top: 4px solid #ff2965;
  border-bottom: 4px solid #00ffdb;
  border-radius: 24px;

  @media (max-width: 1340px) {
    height: auto;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 380px) {
    width: 85vw;
  }

  @media (min-width: 1341px) and (max-height: 880px) {
    height: 40em;
  }
`;
