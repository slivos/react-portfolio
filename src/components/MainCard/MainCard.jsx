import React, { useEffect } from 'react';
import { Container, Wrapper } from './MainCard.styled';
import About from './About/About';
import Contact from './Contact/Contact';
import Tech from './Tech/Tech';
import { animate } from 'motion';

const MainCard = () => {
  useEffect(() => {
    animate(
      '#about-con',
      { opacity: 1, transform: 'translateX(0)' },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );
    animate(
      '#tech-con',
      { opacity: 1, transform: 'translateX(0)' },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );

    animate(
      '#contact-con',
      { opacity: 1, transform: 'translateX(0)' },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <About />
          <Tech />
          <Contact />
        </Wrapper>
      </Container>
    </>
  );
};

export default MainCard;
