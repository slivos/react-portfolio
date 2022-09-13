import React from 'react';
import { ContainerAbout, Wrapper, H2 } from './About.styled';

const About = () => {
  return (
    <>
      <ContainerAbout id="about-con">
        <H2>Pár slov o mne.</H2>
        <Wrapper>
          <p>
            <strong>Front-end developer</strong> s veľkou túžbou tvoriť diela, o
            ktorých vie, že druhým spravia <strong>radosť.</strong> Rád sa
            zlepšujem a posúvam stále vpred, to platí ako pri práci, tak celkovo
            v mojom živote, <strong>pohyb je základ života.</strong> Ak ma
            zrovna nenájdete práve vytvárať webové aplikácie, tak ma určite
            nájdete jazdiť v prírode na horskom bicykli alebo cvičiť.
          </p>
        </Wrapper>
      </ContainerAbout>
    </>
  );
};

export default About;
