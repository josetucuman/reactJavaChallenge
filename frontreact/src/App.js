import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navegacion from "./components/navigation/Navegacion";
import About from "./components/pages/About";
import CreateGuest from "./components/pages/CreateGuest";
import ListGuest from "./components/pages/ListGuest";
import "bootswatch/dist/lumen/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/" element={<ListGuest />} />
        <Route path="/add" element={<CreateGuest />} />
        <Route path="/list" element={<ListGuest />} />
        <Route path="/edit/:id" element={<CreateGuest />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
