import "./App.css";
import { Router } from "react-router-dom";
import { Routes } from "././router";
import history from "./history";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("load", (e) => {
      if (window.innerWidth < 892) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
    window.addEventListener("resize", (e) => {
      setCurrentWidth(window.innerWidth);
      if (window.innerWidth < 892) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
  }, [currentWidth]);
  return (
    <div className="App">
      <NavBar isMobileScreen={isMobileScreen} />
      <Router history={history}>{Routes}</Router>
    </div>
  );
}

export default App;
