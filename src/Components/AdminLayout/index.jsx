import PropTypes from "prop-types";
import './adminlayout.scss';
import AdminImg from '../../Assets/images/Admin-img.png';
import { Fragment } from "react";
import {NavLink } from "react-router-dom";
const AdminLayout = ({children}) => {

    
  return (
    <Fragment>
       <div className="admin-layout">
          <div className="admin-layout__left">
              <div className="admin-layout__admin--information d-flex">
                 <img src={AdminImg} alt="admin-img" width='58' height='58' />
                 <div className="admin-layout__admin--info ">
                    <h5 className="mt-0 mb-1">Username</h5>
                    <p className="my-0 text-secondary">admin@gmail.com</p>
                 </div>
              </div>
              <ul  className = "admin-layout__left--list" >
                 <li className = "admin-layout__left--item" >
                     <NavLink
                        to = '/admin/users'
                        className = 'admin-layout__left--item-link first' >
                        Users
                     </NavLink>
                 </li>
                 <li className="admin-layout__left--item">
                      <NavLink
                        to = '/admin/uploads'
                        className = 'admin-layout__left--item-link second' >
                        Uploads
                     </NavLink>
                 </li>
                 <li className="admin-layout__left--item">
                     <NavLink
                        to = '/admin/messages'
                        className = 'admin-layout__left--item-link third' >
                        Messages
                     </NavLink>
                 </li>
                 <li className="admin-layout__left--item">
                     <NavLink
                        to = '/admin/advertisements'
                        className = 'admin-layout__left--item-link fourth' >
                        Advertisements
                     </NavLink>
                 </li>
                 <li className="admin-layout__left--item">
                      <NavLink
                        to = '/admin/dashboard'
                        className = 'admin-layout__left--item-link fifth' >
                        Dashboard
                     </NavLink>
                 </li>
              </ul>
          </div>
          <div className="admin-layout__right">
             {children}
          </div>
       </div>
    </Fragment>
    )
}

AdminLayout.propTypes ={
  children : PropTypes.object,
}

export default AdminLayout;
