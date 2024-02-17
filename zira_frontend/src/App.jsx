import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import LoginAdmin from './Components/adminSide/LoginAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import HomeAdmin from './Components/adminSide/HomeAdmin';
import RegisterInstructor from './Components/instructorSide/RegisterInstructor';
import LoginInstructor from './Components/instructorSide/LoginInstructor';
import { InstructorRoute } from './Components/PrivateRoute/PrivateRoute';
import HomeInstructor from './Components/instructorSide/HomeInstructor';
import HomeUser from './Components/userSide/HomeUser';
import SignupUser from './Components/userSide/SignupUser';
import LoginUser from './Components/userSide/LoginUser';
import UsersList from './Components/adminSide/UsersList';


function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeUser />} />
            <Route path='/register' element={<SignupUser />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/loginadmin' element={<LoginAdmin />} />
            <Route path='/homeadmin' element={<PrivateRoute><HomeAdmin /></PrivateRoute>} />
            <Route path='/usersadmin' element={<PrivateRoute><UsersList /></PrivateRoute>} />
            <Route path='/registerinstructor' element={<RegisterInstructor />} />
            <Route path='/logininstructor' element={<LoginInstructor />} />
            <Route path='/homeinstructor' element={<InstructorRoute><HomeInstructor /></InstructorRoute>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
