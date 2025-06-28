import './index.css';
import { Routes, Route } from "react-router-dom";
import { AuthProvider  } from './context/AuthContext';
import MainLayouts from './layouts/MainLayouts';
import Registration from './pages/Home/components/Registration';
import Login from './pages/Home/components/Login';




function App() {
  return (
  
      <AuthProvider >
    <Routes>
    
        <Route path="/*" element={<MainLayouts />} />

        <Route path="/registration" element={<Registration />} />
        
        <Route path="/login" element={<Login />} />
       
      </Routes>
      </AuthProvider>


  );
}

export default App;
