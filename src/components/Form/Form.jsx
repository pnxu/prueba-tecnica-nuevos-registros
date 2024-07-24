import React from "react";
import { useForm } from "react-hook-form";
import {
  FormSection,
  FormContainer,
  TitleContainer,
  Title,
  Text,
  FormInput,
  Divisor,
  ButtonContainer,
  Button,
} from "./StyledForm";

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title size="small">Datos del vendedor:</Title>
          <FormInput
            size="large"
            placeholder="Nombre Completo"
            {...register("nombreCompleto")}
          />
          <FormInput
            size="small"
            placeholder="Rut Vendedor"
            {...register("rutVendedor")}
          />
          <Divisor />
          <Title size="small">Datos del vehículo:</Title>
          <FormInput
            size="small"
            placeholder="Patente del vehículo"
            {...register("patenteVehiculo")}
          />
          <FormInput
            size="small"
            placeholder="Marca del vehículo"
            {...register("marcaVehiculo")}
          />
          <FormInput
            size="small"
            placeholder="Modelo del vehículo"
            {...register("modeloVehiculo")}
          />
          <FormInput
            size="small"
            placeholder="Precio del vehículo"
            {...register("precioVehiculo")}
          />
          <Divisor />
          <ButtonContainer>
            <Button type="submit">Enviar</Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </FormSection>
  );
}

export default Form;
