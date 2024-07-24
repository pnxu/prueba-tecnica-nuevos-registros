import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainForm from "./views/MainForm";
import ListForm from "./views/ListForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/formulario" element={<MainForm />} />
          <Route path="/lista-formulario" element={<ListForm />} />
          <Route path="/" element={<Navigate to="/formulario" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
