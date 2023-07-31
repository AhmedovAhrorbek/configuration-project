import AdminLayout from "../../Components/AdminLayout";
import SearchIcon from '../../Assets/icons/searchIcon.png';
import UploadFileIcon from '../../Assets/icons/admin-adversitement-input-icon.png';
const Advertisements = () => {
  return (
    <AdminLayout>
       <div className="wrapper">
          <img className="search-icon" src={SearchIcon} alt="search icon" />
          <input className="admin__search-input" type="text" name="search-input" placeholder="search in page" />
          <button className=" admin-search-btn">Search</button>
        </div>

        <div className="admin__advertisement--inputs">
           <input className="admin__advertisement--inputs-title form-control " type="text" name="title" placeholder="ADS title" />
           <input className="admin__advertisement--inputs-description form-control " type="text" name="description" placeholder="ADS description" />
           <input className="admin__advertisement--inputs-email form-control " type="email" name="email" placeholder="https://example.com" />
           <input className="admin__advertisement--inputs-upload-ads form-control " type="text" name="upload-ads" placeholder="Upload ADS" />
           <div className = " admin__advertisement--inputs-wrapper" >
               <input className="admin__advertisement--inputs-date form-control "  type="date" name="date"  placeholder="Date" />
               <div className = "admin__advertisement--inputs-wrapper-icon" >
                   <i  className = "admin__advertisement--inputs-input-icon" >
                      <img src={UploadFileIcon} alt="upload" />
                   </i>
                   <input className="input-field form-control admin__advertisement--inputs-upload" type="text" placeholder="Upload ADS"/>
               </div>
           </div>
        </div>
        <button className="admin__advertisement-btn">Upload</button>
    </AdminLayout>
  )
}

export default Advertisements
