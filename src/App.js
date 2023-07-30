// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoutes from './components/ProtectedRoute';
import Cookies from 'js-cookie';
import Layout from './pages/Layout';
import Finances from './pages/Finances';
import Settings from './pages/Settings';
import Error from './pages/Error';


const App = () => {
  let auth = Cookies.get('token');

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<Layout><Home/></Layout>} />
              <Route path='/finances' element={<Layout><Finances/></Layout>} />
              <Route path='/settings' element={<Layout><Settings/></Layout>} />
          </Route>
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />} />
        <Route path="*" element={<Layout><Error/></Layout>} />

      </Routes>
    </Router>
  );
};

export default App;
