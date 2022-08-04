import "./App.css";
import Navbar from "./customComponent/Navbar";
import About from "./customComponent/About";
import TextForm from "./customComponent/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //states
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //Methods
  const themeToggle = () => {
    if (theme == "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#3a3b3d";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          showAlert={showAlert}
          theme={theme}
          themeToggle={themeToggle}
          home="Home"
          title="Texter"
          search="Search"
          about="About Us"
          aboutlink="/About"
          homelink="/TextForm"
        />

        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/TextForm" element={<TextForm />} />
          <Route path="/home" element={<TextForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
