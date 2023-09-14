import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <>
    <div className="nu">
      <Navbar />
    </div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Hero" element={<Hero />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
