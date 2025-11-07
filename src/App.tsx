import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { useEffect } from "react";

import BackgroundDay from "./components/BackgroundDay";
import BackgroundNight from "./components/BackgroundNight";
import LogoType from "./components/Logo";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import useThemeStore from "./stores/themeStore";

const App = () => {
  const isNight = useThemeStore((state) => state.isNight);

  useEffect(() => {
    document.body.classList.toggle("night-mode", isNight);
    document.body.classList.toggle("day-mode", !isNight);
  }, [isNight]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ position: "relative", zIndex: 1 }}>
          {isNight ? <BackgroundNight /> : <BackgroundDay />}
          <LogoType />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;