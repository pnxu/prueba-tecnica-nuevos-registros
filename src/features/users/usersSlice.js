import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    nombreCompleto: "Juan Perez",
    rutVendedor: "12.345.678-9",
    patenteVehiculo: "AB1234",
    marcaVehiculo: "Chevrolet",
    modeloVehiculo: "Onix Sedan",
    colorVehiculo: "Rojo",
  },
  {
    id: 2,
    nombreCompleto: "Carlos Soto",
    rutVendedor: "98.765.432-1",
    patenteVehiculo: "FG9012",
    marcaVehiculo: "Ford",
    modeloVehiculo: "Mustang",
    colorVehiculo: "Azul",
  },
  {
    id: 3,
    nombreCompleto: "Maria Lopez",
    rutVendedor: "45.678.912-3",
    patenteVehiculo: "OJ4567",
    marcaVehiculo: "Nissan",
    modeloVehiculo: "Rogue",
    colorVehiculo: "Blanco",
  },
  {
    id: 4,
    nombreCompleto: "Maribel Rojas",
    rutVendedor: "9.876.543-2",
    patenteVehiculo: "KL8901",
    marcaVehiculo: "Toyota",
    modeloVehiculo: "Camry",
    colorVehiculo: "Negro",
  },
  {
    id: 5,
    nombreCompleto: "Javier Rodriguez",
    rutVendedor: "7.478.203-1",
    patenteVehiculo: "HI9305",
    marcaVehiculo: "Ford",
    modeloVehiculo: "F-150",
    colorVehiculo: "Blanco",
  },
  {
    id: 6,
    nombreCompleto: "Felipe Gutierrez",
    rutVendedor: "28.498.838-2",
    patenteVehiculo: "IP9837",
    marcaVehiculo: "Toyota",
    modeloVehiculo: "Camry",
    colorVehiculo: "Negro",
  },
  {
    id: 7,
    nombreCompleto: "Sofia Perez",
    rutVendedor: "12.345.678-9",
    patenteVehiculo: "CD5678",
    marcaVehiculo: "Toyota",
    modeloVehiculo: "Corolla",
    colorVehiculo: "Blanco",
  },
  {
    id: 8,
    nombreCompleto: "Jorge Pino",
    rutVendedor: "5.838.948-2",
    patenteVehiculo: "OP2940",
    marcaVehiculo: "Toyota",
    modeloVehiculo: "Corolla",
    colorVehiculo: "Azul",
  },
  {
    id: 9,
    nombreCompleto: "Francisco Gutierrez",
    rutVendedor: "4.389.829-5",
    patenteVehiculo: "VI7592",
    marcaVehiculo: "Nissan",
    modeloVehiculo: "Rogue",
    colorVehiculo: "Negro",
  },
  {
    id: 10,
    nombreCompleto: "Susana Rodriguez",
    rutVendedor: "4.349.193.9",
    patenteVehiculo: "VJ2845",
    marcaVehiculo: "Honda",
    modeloVehiculo: "Civic",
    colorVehiculo: "Verde",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
