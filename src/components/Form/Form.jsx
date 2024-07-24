import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../features/users/usersSlice";
import {
  FormSection,
  FormContainer,
  TitleContainer,
  Title,
  Text,
  FormInput,
  FormSelectInput,
  Divisor,
  ButtonContainer,
  Button,
  ErrorSpan,
} from "./StyledForm";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const marcas = useSelector((state) => state.options.marcas);
  const [modelos, setModelos] = useState([]);

  const handleMarcaChange = (e) => {
    const selectedMarca = marcas.find((marca) => marca.name === e.target.value);
    setModelos(selectedMarca ? selectedMarca.modelos : []);
    setValue("modeloVehiculo", "");
  };

  const onSubmit = (data) => {
    try {
      dispatch(addUser({ ...data, id: uuidv4(), colorVehiculo: "Negro" }));
      navigate("/lista-formulario");
    } catch (error) {
      console.log(error);
    }
  };

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
            {...register("nombreCompleto", { required: true })}
          />
          {errors.nombreCompleto && (
            <ErrorSpan>Este campo es requerido</ErrorSpan>
          )}
          <FormInput
            size="small"
            placeholder="Rut Vendedor"
            {...register("rutVendedor", { required: true })}
          />
          {errors.rutVendedor && <ErrorSpan>Este campo es requerido</ErrorSpan>}
          <Divisor />
          <Title size="small">Datos del vehículo:</Title>
          <FormInput
            size="small"
            placeholder="Patente del vehículo"
            {...register("patenteVehiculo", { required: true })}
          />
          {errors.patenteVehiculo && (
            <ErrorSpan>Este campo es requerido</ErrorSpan>
          )}
          <FormSelectInput
            size="small"
            {...register("marcaVehiculo", { required: true })}
            onChange={handleMarcaChange}
          >
            <option value="">Marca del vehículo</option>
            {marcas.map((marca, index) => (
              <option key={index} value={marca.name}>
                {marca.name}
              </option>
            ))}
          </FormSelectInput>
          {errors.marcaVehiculo && (
            <ErrorSpan>Este campo es requerido</ErrorSpan>
          )}
          <FormSelectInput
            size="small"
            {...register("modeloVehiculo", { required: true })}
          >
            <option value="">Modelo del vehículo</option>
            {modelos.map((modelo, index) => (
              <option key={index} value={modelo}>
                {modelo}
              </option>
            ))}
          </FormSelectInput>
          {errors.modeloVehiculo && (
            <ErrorSpan>Este campo es requerido</ErrorSpan>
          )}
          <FormInput
            size="small"
            placeholder="Precio del vehículo"
            {...register("precioVehiculo", { required: true })}
          ></FormInput>
          {errors.precioVehiculo && (
            <ErrorSpan>Este campo es requerido</ErrorSpan>
          )}
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
