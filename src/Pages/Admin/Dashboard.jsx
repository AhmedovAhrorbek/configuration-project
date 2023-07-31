import AdminLayout from "../../Components/AdminLayout"
import SearchIcon from '../../Assets/icons/admin-dashboard-searchicon.png';
import DailyVisitors from '../../Assets/images/admin-dashboardDaily visitor.png';
import MonthlyVisitor from '../../Assets/images/Monthly visitors.png';
import WorldMap from '../../Assets/images/World map.png';
const Dashboard = () => {
  return (
    <AdminLayout>
        <div className="admin__dashboard--wrapper-input">
            <input className="admin__dashboard--search form-control" type="text" name="search" placeholder="Search" />
            <a className="admin__dashboard--search-icon" href="#serch">
               <img src={SearchIcon} alt="search-icon" width={18} height={18} />
            </a>
        </div>        
        <h2 className="admin__dashboard--title">Weekly statistics</h2>
        <div className="admin__dashboard--cards">
           <div className="admin__dashboard--cards-card">
              <h4 className="admin__dashboard--cards-card-title">Users</h4>
              <div>
                 <p className="admin__dashboard--cards-card-member">12,924</p>
              </div>
           </div>
           <div className="admin__dashboard--cards-card">
              <h4 className="admin__dashboard--cards-card-title">New Users</h4>
              <div>
                 <p className="admin__dashboard--cards-card-usernumber">5,200</p>
              </div>
           </div>
           <div className="admin__dashboard--cards-card">
              <h4 className="admin__dashboard--cards-card-title">App Download</h4>
              <div>
                 <p className="admin__dashboard--cards-card-download">467k</p>
              </div>
           </div>
        </div>
        <div className="admin__dashboard--visitors-statistic">
           <img src={DailyVisitors} alt="daily visitor" width={489} height={344}/>
           <img src={MonthlyVisitor} alt="monthly visitors" width={501} height={341} />
        </div>
        <img className="admin__dashboard--worldmap" src={WorldMap} alt="world map" width={520} height={303} />
    </AdminLayout>
  )
}

export default Dashboard
