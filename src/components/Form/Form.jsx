import React from "react";
import {
  FormSection,
  FormContainer,
  TitleContainer,
  Title,
  Text,
  FormWrapper,
  FormInput,
  Divisor,
  ButtonContainer,
  Button,
} from "./StyledForm";

function Form() {
  return (
    <FormSection>
      <FormContainer>
        <TitleContainer>
          <Title size="large">Nuevo formulario</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the bed industry's standard dummy
            text ever since.
          </Text>
        </TitleContainer>
        <FormWrapper>
          <form>
            <Title size="small">Datos del vendedor:</Title>
            <FormInput size="large" placeholder="Nombre Completo" />
            <FormInput size="small" placeholder="Rut Vendedor" />
            <Divisor />
            <Title size="small">Datos del vehículo:</Title>
            <FormInput size="small" placeholder="Patente del vehículo" />
            <FormInput size="small" placeholder="Marca del vehículo" />
            <FormInput size="small" placeholder="Modelo del vehículo" />
            <FormInput size="small" placeholder="Precio del vehículo" />
            <Divisor />
            <ButtonContainer>
              <Button> Enviar</Button>
            </ButtonContainer>
          </form>
        </FormWrapper>
      </FormContainer>
    </FormSection>
  );
}

export default Form;
