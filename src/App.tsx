import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundDay from './components/BackgroundDay';
import Configurations from './components/Configurations';
import LogoType from './components/Logo';
import Signup from './pages/Signup';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <BackgroundDay />
        <LogoType />
        <Configurations />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;