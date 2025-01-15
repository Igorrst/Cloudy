import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundDay from './components/BackgroundDay';
import Signup from './pages/Signup';
import Configurations from './components/Configurations';
import LogoType from './components/Logo';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <BackgroundDay />  { }
        <Configurations />
        <LogoType />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;