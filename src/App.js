import './App.css';
import AdminMaincontainer from './pages/AdminMaincontainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AdminMaincontainer /> */}
        <Routes>
          <Route path="*" element={<AdminMaincontainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
