import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import HomeUser from './Components/userSide/HomeUser';
import SignupUser from './Components/userSide/SignupUser';
import LoginUser from './Components/userSide/LoginUser';
import { UserRoute } from './Components/PrivateRoute/PrivateRoute';
import CourseMain from './Components/userSide/CourseMain';
import LoginAdmin from './Components/adminSide/LoginAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import HomeAdmin from './Components/adminSide/HomeAdmin';
import UsersList from './Components/adminSide/UsersList';
import InstructorsList from './Components/adminSide/InstructorsList';
import CourseAdmin from './Components/adminSide/CourseAdmin';
import RegisterInstructor from './Components/instructorSide/RegisterInstructor';
import LoginInstructor from './Components/instructorSide/LoginInstructor';
import { InstructorRoute } from './Components/PrivateRoute/PrivateRoute';
import HomeInstructor from './Components/instructorSide/HomeInstructor';
import CourseInstructor from './Components/instructorSide/CourseInstructor';
import ProfileInstructor from './Components/instructorSide/ProfileInstructor';



function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeUser />} />
            <Route path='/register' element={<SignupUser />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/coursemain' element={<UserRoute><CourseMain /></UserRoute>} />
            <Route path='/loginadmin' element={<LoginAdmin />} />
            <Route path='/homeadmin' element={<PrivateRoute><HomeAdmin /></PrivateRoute>} />
            <Route path='/usersadmin' element={<PrivateRoute><UsersList /></PrivateRoute>} />
            <Route path='/instructorsadmin' element={<PrivateRoute><InstructorsList /></PrivateRoute>} />
            <Route path='/coursesadmin' element={<PrivateRoute><CourseAdmin /></PrivateRoute>} />
            <Route path='/registerinstructor' element={<RegisterInstructor />} />
            <Route path='/logininstructor' element={<LoginInstructor />} />
            <Route path='/homeinstructor' element={<InstructorRoute><HomeInstructor /></InstructorRoute>} />
            <Route path='/courseinstructor' element={<InstructorRoute><CourseInstructor /></InstructorRoute>} />
            <Route path='/profileinstructor' element={<InstructorRoute><ProfileInstructor /></InstructorRoute>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
