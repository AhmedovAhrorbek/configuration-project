import AdminLayout from "../../Components/AdminLayout"
import './adminpages.scss';
import  SearchIcon  from "../../Assets/icons/searchIcon.png";
import UserImg from '../../Assets/images/admin-user-img.png';
import Userbtn from '../../Assets/images/admin-users-btn.png';
import Userdots from '../../Assets/images/admin-users-dots.png';
const Users = () => {
  return (
    <AdminLayout>
        <div className="wrapper">
          <img className="search-icon" src={SearchIcon} alt="search icon" />
          <input className="admin__search-input" type="text" name="search-input" placeholder="search in page" />
          <button className=" admin-search-btn">Search</button>
        </div>

        <div className="admin__users--table">
            <ul className="admin__users--titles">
                <input className="admin__users--titles-check" type="checkbox" name="checkbox" />
                <li className="admin__users--titles-title">Image</li>
                <li className="admin__users--titles-title">Name</li>
                <li className="admin__users--titles-title">Date</li>
                <li className="admin__users--titles-title">Type</li>
                <li className="admin__users--titles-title">Number</li>
                <li className="admin__users--titles-title">Email </li>
                <li className="admin__users--titles-title">Block</li>
                <li className="admin__users--titles-title">Chat</li>
            </ul>
        </div>

        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
        <ul className="admin__users--list">
          <input className="admin__users--list-check" type="checkbox" name="checkbox" />
          <img className="admin__users--list-userimg" src={UserImg} alt="User img" width={36} height={36} />
          <li className="admin__users--list-item">User name</li>
          <li className="admin__users--list-item">05.25.2023</li>
          <li className="admin__users--list-item">Teacher</li>
          <li className="admin__users--list-item">+998901234567</li>
          <li className="admin__users--list-item">user@gmail.com</li>
          <button className="admin__users--list-btn">Block</button>
          <img className="admin__users--list-strbtn" src={Userbtn} alt="user btn" />
          <a href="#1">
             <img src={Userdots} alt="user message" />
          </a>
        </ul>
    </AdminLayout>
  )
}

export default Users
