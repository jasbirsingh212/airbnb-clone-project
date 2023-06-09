import { Route, Routes } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";

import './utills/axios/index.js';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
