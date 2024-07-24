import React from "react";
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
  TableIcon,
  TableCounter,
  Divisor,
} from "./StyledTable.js";

const deleteIcon = "../../../src/assets/Eliminar.png";

function ListTable() {
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
              <TableHeader>Color vehículo</TableHeader>
              <TableHeader>Eliminar</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableData>Nombre</TableData>
              <TableData>Rut vendedor</TableData>
              <TableData>Patente vehículo</TableData>
              <TableData>Marca vehículo</TableData>
              <TableData>Modelo vehículo</TableData>
              <TableData>Color vehículo</TableData>
              <TableIcon>
                <img src={deleteIcon} alt="Eliminar" />
              </TableIcon>
            </TableRow>
          </TableBody>
        </Table>
        <Divisor />
      </TableContainer>
      <TableCounter>
        <Text>
          Mostrando registros del 1 al 10 de un total de 10 registros.
        </Text>
      </TableCounter>
    </TableSection>
  );
}

export default ListTable;
