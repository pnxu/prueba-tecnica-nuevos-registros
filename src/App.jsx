import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Form from "./views/Form";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/formulario" element={<Form />} />
          {/* <Route path="/lista-formulario" component={ListForm} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
