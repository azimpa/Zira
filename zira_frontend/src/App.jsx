import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import SignupPage from './Components/userSide/SignupPage';
import LoginPage from './Components/userSide/LoginPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AdminLogin from './Components/adminSide/AdminLogin';
import InstructorRegister from './Components/instructorSide/InstructorRegister';
import InstructorLogin from './Components/instructorSide/InstructorLogin';
import HomeAdmin from './Components/adminSide/HomeAdmin';
import HomeUser from './Components/userSide/HomeUser';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminhome' element={<PrivateRoute><HomeAdmin /></PrivateRoute>} />
            <Route path='/' element={<HomeUser/>}/>
            <Route path='/registerinstructor' element={<InstructorRegister />} />
            <Route path='/logininstructor' element={<InstructorLogin />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
