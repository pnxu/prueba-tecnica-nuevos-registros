import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../features/users/usersSlice";
import {
  TableSection,
  TableContainer,
  TitleContainer,
  Title,
  Text,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  ButtonContainer,
  Button,
  TableCounter,
} from "./StyledTable.js";

const deleteIcon = "../../../src/assets/Eliminar.png";

function ListTable() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    console.log(id);
  };

  return (
    <TableSection>
      <TitleContainer>
        <Title>Lista formulario</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the bed industry's standard dummy text
          ever since.
        </Text>
      </TitleContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>Rut vendedor</TableHeader>
              <TableHeader>Patente vehículo</TableHeader>
              <TableHeader>Marca vehículo</TableHeader>
              <TableHeader>Modelo vehículo</TableHeader>
              <TableHeader>Precio vehículo</TableHeader>
              <TableHeader>Eliminar</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableData>{user.nombreCompleto}</TableData>
                <TableData>{user.rutVendedor}</TableData>
                <TableData>{user.patenteVehiculo}</TableData>
                <TableData>{user.marcaVehiculo}</TableData>
                <TableData>{user.modeloVehiculo}</TableData>
                <TableData>{user.precioVehiculo}</TableData>
                <TableData>
                  <ButtonContainer>
                    <Button onClick={() => handleDelete(user.id)}>
                      <img src={deleteIcon} alt="Eliminar" />
                    </Button>
                  </ButtonContainer>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableCounter>
        <Text>
          Mostrando registros del 1 al {users.length} de un total de{" "}
          {users.length} registros.
        </Text>
      </TableCounter>
    </TableSection>
  );
}

export default ListTable;
