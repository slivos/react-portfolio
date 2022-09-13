import React from 'react';
import { ContainerTech } from './Tech.styled';
import { WrapperTech, H2Tech } from './Tech.styled';

const Tech = () => {
  return (
    <ContainerTech id="tech-con">
      <H2Tech>Tech-stack.</H2Tech>
      <WrapperTech>
        <img className="icon" src="./icons/react.svg" alt="react-svg" />
        <img className="icon" src="./icons/vue.svg" alt="vue-svg" />
        <img className="icon" src="./icons/nuxt.svg" alt="nuxt-svg" />
        <img
          className="icon"
          src="./icons/typescript.svg"
          alt="typescript-svg"
        />
        <img
          className="icon"
          src="./icons/styled-components.svg"
          alt="styled-components-svg"
        />
      </WrapperTech>
    </ContainerTech>
  );
};

export default Tech;
