import React from "react";
import { HeroContainer, Title, BoldTitle, Image, Divisor } from "./StyledHero";
const illustrationPath = "../../../public/assets/Illustration.png";

function Hero() {
  return (
    <React.Fragment>
      <HeroContainer>
        <Title>
          Formulario <BoldTitle> de Prueba </BoldTitle>
        </Title>
        <Image src={illustrationPath} alt="Formulario de Prueba" />
        <Divisor />
      </HeroContainer>
    </React.Fragment>
  );
}

export default Hero;
