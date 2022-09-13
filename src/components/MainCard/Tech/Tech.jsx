import React from 'react';
import { ContainerTech } from './Tech.styled';
import { WrapperTech, H2Tech } from './Tech.styled';

const Tech = () => {
  return (
    <ContainerTech id="tech-con">
      <H2Tech>Tech-stack.</H2Tech>
      <WrapperTech>
        <img className="icon" src="./react.svg" alt="react-svg" />
        <img className="icon" src="./vue.svg" alt="vue-svg" />
        <img className="icon" src="./nuxt.svg" alt="nuxt-svg" />
        <img className="icon" src="./typescript.svg" alt="typescript-svg" />
        <img
          className="icon"
          src="./styled-components.svg"
          alt="styled-components-svg"
        />
      </WrapperTech>
    </ContainerTech>
  );
};

export default Tech;
