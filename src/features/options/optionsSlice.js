import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marcas: [
    {
      name: "Toyota",
      modelos: ["Corolla", "Camry"],
    },
    {
      name: "Ford",
      modelos: ["Mustang", "F-150"],
    },
    {
      name: "Honda",
      modelos: ["Civic", "Accord"],
    },
    {
      name: "Chevrolet",
      modelos: ["Camaro", "Silverado"],
    },
    {
      name: "Nissan",
      modelos: ["Altima", "Rogue"],
    },
  ],
};
const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
});

export default optionsSlice.reducer;
