import PropTypes from "prop-types"
import { useState } from "react"

export default function User({user, handleSave, handleRemove}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({id: user.id, name: user.name, email: user.email, company: user.company.name, city: user.address.city, zip: user.address.zipcode});
  function handleEditStatus(){
    setIsEditing(!isEditing);
  }
  function handleEdit(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  function handleUpdate(){
    setIsEditing(false);
    handleSave(formData);
  }

  function handleDelete(){
    handleRemove(user.id)
  }
  return (
    <>
    {
    !isEditing ? <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.company.name}</td>
        <td>{user.address.city}</td>
        <td>{user.address.zipcode}</td>
        <td className="btn btn-sm btn-secondary me-1" onClick={handleEditStatus}>Edit</td>
        <td className="btn btn-sm btn-secondary" onClick={handleDelete}>Delete</td>
    </tr> : <tr>
        <td><input name="name" type="text" value={formData.name} onChange={handleEdit}/></td>
        <td><input name="email" type="email" value={formData.email} onChange={handleEdit}/></td>
        <td><input name="company" type="text" value={formData.company} onChange={handleEdit}/></td>
        <td><input name="city" type="text" value={formData.city} onChange={handleEdit}/></td>
        <td><input name="zip" type="text" value={formData.zip} onChange={handleEdit}/></td>
        <td className="btn btn-sm btn-secondary me-1" onClick={handleUpdate}>Save</td>
    </tr>
    }
    </>
  )
}

User.propTypes = {
    user: PropTypes.object,
    handleSave: PropTypes.func,
    handleRemove: PropTypes.func
}