import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
};

export default App;
