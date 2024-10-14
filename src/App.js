import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import './index.css'
import Registration from './Component/Registration';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Registration />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<Dashboard />} path='/dashboard' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
