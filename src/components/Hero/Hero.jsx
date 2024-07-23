import React from "react";
import styled from "styled-components";
import { HeroContainer, Title, BoldTitle } from "./HeroContainer";

const Image = styled.img``;

function Hero() {
  return (
    <React.Fragment>
      <HeroContainer>
        <Title>
          Formulario <BoldTitle> de Prueba </BoldTitle>
        </Title>
        <Image src="../../src/assets/1.png" alt="Formulario de Prueba" />
      </HeroContainer>
    </React.Fragment>
  );
}

export default Hero;
