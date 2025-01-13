import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundDay from './components/BackgroundDay';
import Signup from './pages/Signup';
import ConfigIcon from './components/ConfigIcon';
import LogoType from './components/Logo';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <BackgroundDay />  { }
        <ConfigIcon />
        <LogoType />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;