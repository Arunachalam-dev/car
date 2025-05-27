// src/App.js
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import Booking from './Page/Booking';
import Userbooking from './Page/userbooking';
import Addcar from './Page/Addcar';
import AdminHome from './Page/AdminHome';
import Editcar from './Page/Editcar';
import 'remixicon/fonts/remixicon.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/reset.css";

import ProtectedRoute from '../src/Compound/ProtectedRoute';
import Layout from '../src/Compound/Laayout (1)/Layout';

function App() {
  // Get the user from localStorage
  const user = JSON.parse(localStorage.getItem('users'));
  const isAdmin = user?.role === 'admin';

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/a' element={<Layout/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/booking/:car_id'
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path='/userbookig'
            element={
              <ProtectedRoute>
                <Userbooking />
              </ProtectedRoute>
            }
          />

          {/* Admin-only Routes */}
          {isAdmin && (
            <>
              <Route
                path='/addcar'
                element={
                  <ProtectedRoute>
                    <Addcar />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/admin'
                element={
                  <ProtectedRoute>
                    <AdminHome />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/editcar/:car_id'
                element={
                  <ProtectedRoute>
                    <Editcar />
                  </ProtectedRoute>
                }
              />
            </>
          )}

          {/* Catch-all route */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
