import { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import { PrivateRoute } from '../Utils/privateRoute';
import  AdminLayout  from  '../Components/AdminLayout';
import Users from '../Pages/Admin/Users';
import Dashboard from '../Pages/Admin/Dashboard';
import Messages from '../Pages/Admin/Messages';
import Uploads from '../Pages/Admin/Uploads';
import Advertisements from '../Pages/Admin/Advertisements';
const Root = () => {
  return (
   <Fragment>
     <Routes>
       <Route path='/home' element={<HomePage />} />
       <Route path='/' element={<Navigate to = '/home' />} />
       <Route path='/login' element={<LoginPage />} />
       <Route element={<PrivateRoute />}>
              <Route path='/admin' element = {<AdminLayout />} />
              <Route path='/admin/users' element={<Users />} />
              <Route path='/admin/dashboard' element={<Dashboard />} />
              <Route path='/admin/messages' element={<Messages />} />
              <Route path='/admin/uploads' element={<Uploads />} />
              <Route path='/admin/advertisements' element={<Advertisements /> } />
       </Route>

       <Route path='*' element={<h1>404 not found </h1>} />
     </Routes>
   </Fragment>
  )
}

export default Root;
