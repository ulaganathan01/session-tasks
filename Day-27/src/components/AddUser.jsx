import { useState } from "react";
import PropTypes from "prop-types"

export default function AddUser({addUser}) {
  const [formData, setFormData] = useState({name: "", email: "", company: "", city: "", zip: ""});
  const [isError, setIsError] = useState(false);
  
  function handleFormData(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  function handleSubmitForm(e){
    e.preventDefault();
    if(formData.name && formData.email && formData.company && formData.city && formData.zip){
      setIsError(false);
      addUser(formData);
    }else{
      setIsError(true);
    }
  }
  return (
    <>
    {isError && <div className="alert alert-warning" role="alert">
      Enter all the necessary fields
    </div>}
    <form className="row g-3">
  <div className="col-md-2">
    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleFormData} id="inputName4" placeholder="Name"/>
  </div>
  <div className="col-md-2">
    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleFormData} id="inputEmail4" placeholder="Email"/>
  </div>
  <div className="col-md-2">
    <input type="text" className="form-control" name="company" value={formData.company} onChange={handleFormData} id="inputCompany4" placeholder="Company"/>
  </div>
  <div className="col-md-2">
    <input type="text" className="form-control" name="city" value={formData.city} onChange={handleFormData} id="inputCity" placeholder="City"/>
  </div>
  <div className="col-md-2">
    <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleFormData} id="inputZip" placeholder="Zip code"/>
  </div>
  <div className="col-md-2">
    <button type="submit" className="btn btn-primary" onClick={handleSubmitForm}>Add User</button>
  </div>
</form>
</>
  )
}


AddUser.propTypes = {
  addUser: PropTypes.func
}