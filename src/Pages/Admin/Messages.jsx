import AdminLayout from "../../Components/AdminLayout"
import SearchIcon from '../../Assets/icons/searchIcon.png';
import UserIcon50px from '../../Assets/icons/message-icon 50px.png';
const Messages = () => {
  return (
    <AdminLayout>
        <div className="wrapper">
          <img className="search-icon" src={SearchIcon} alt="search icon" />
          <input className="admin__search-input" type="text" name="search-input" placeholder="search in page" />
          <button className=" admin-search-btn">Search</button>
        </div>

        <div className="admin__message--users">
           <div className="admin__message--users-user">
              <input className="admin__message--users-user-check" type="checkbox" name="checkbox" />
              <img src={UserIcon50px} alt="user img" width={50} height={50} />
              <div className = "admin__message--users-user-wrapper" >
                <p className="admin__message--users-user-username">User name</p>
                <p className="admin__message--users-user-message">Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
              </div>
              <p className="admin__message--users-user-messagetime">19:30</p>
           </div>
            <div className="admin__message--users-user">
              <input className="admin__message--users-user-check" type="checkbox" name="checkbox" />
              <img src={UserIcon50px} alt="user img" width={50} height={50} />
              <div className = "admin__message--users-user-wrapper" >
                <p className="admin__message--users-user-username">User name</p>
                <p className="admin__message--users-user-message">Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
              </div>
              <p className="admin__message--users-user-messagetime">19:30</p>
           </div>
            <div className="admin__message--users-user">
              <input className="admin__message--users-user-check" type="checkbox" name="checkbox" />
              <img src={UserIcon50px} alt="user img" width={50} height={50} />
              <div className = "admin__message--users-user-wrapper" >
                <p className="admin__message--users-user-username">User name</p>
                <p className="admin__message--users-user-message">Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
              </div>
              <p className="admin__message--users-user-messagetime">19:30</p>
           </div>
        </div>
         
    </AdminLayout>
  )
}

export default Messages
