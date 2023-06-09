import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";

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
