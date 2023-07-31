import AdminLayout from "../../Components/AdminLayout"
import SearchIcon from '../../Assets/icons/searchIcon.png';
import UserImg from '../../Assets/images/admin-user-img.png';
import UploadsCardImg from '../../Assets/images/admin-uploads-card-img.png';
import FilterIcon from '../../Assets/icons/admin-uploads-filter-icon.png'
const Uploads = () => {
  return (
    <AdminLayout>
        <div className="wrapper">
          <img className="search-icon" src={SearchIcon} alt="search icon" />
          <input className="admin__search-input" type="text" name="search-input" placeholder="search in page" />
          <button className=" admin-search-btn">Search</button>
        </div>
       
        <div className="admin__uploads--cards">
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">  
              <a className="admin__uploads--filter" href="#filter"> 
                <img className="admin__uploads--filter-img" src={FilterIcon} alt="filter img" width={24} height={24}  />
              </a>
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
           <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
          <div className="admin__uploads--card">
              <div className="admin__uploads--card-start">
                <img className="admin__uploads--card-start-userimg" src={UserImg} alt="user img" width={20} height={20} />
                <p className="admin__uploads--card-start-username">Username</p>
                <p className="admin__uploads--card-start-lasttime">3 day ago</p>
              </div>
              <img className="admin__uploads--card-img" src={UploadsCardImg} alt="card img" width={150} height={110} />
              <p className="admin__uploads--card-title">Matematika</p>
              <p className="admin__uploads--card-title">Shu fanga oid qisqa malumot</p>
              <button className="admin__uploads--card-btn">Delete</button>
          </div>
         

        </div>
    </AdminLayout>
  )
}

export default Uploads
