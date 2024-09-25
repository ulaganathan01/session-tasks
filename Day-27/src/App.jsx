import { useEffect, useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import axios from "axios"
import User from './components/User';

function App() {
  const [userData, setUserData] = useState([]);

  function handleSave(user){
    axios.put("https://jsonplaceholder.typicode.com/users/1", user)
    .then(res => {
      setUserData(userData.map(user => {
        if(user.id === res.data.id){
          return {
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            company: {name: res.data.company},
            address: {city: res.data.city, zipcode: res.data.zip}
          }
        }else{
          return user;
        }
      }))
    })
  }

  function handleRemove(id){
    axios.delete(`https://jsonplaceholder.typicode.com/users/1`, id)
    .then(res => console.log(res))
  }
  
  function fetchApi(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => res ? setUserData(res.data) : null)
  }
  useEffect(() => {
    fetchApi();
  }, [])

  function addUser(user){
    axios.post("https://jsonplaceholder.typicode.com/users", user)
    .then(res => {
      setUserData([...userData, {
        id: userData.length + 1,
        name: res.data.name,
        email: res.data.email,
        address: {city: res.data.city, zipcode: res.data.zip},
        company: {name: res.data.company}
      }])
    })
  }
  return(
      <div className='App'>
        <h1>Axios API</h1>
        <AddUser addUser={addUser}/>
        {
          userData && 
          <table className='table table-hover mt-3'>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Company</th>
                <th scope="col">City</th>
                <th scope="col">Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {
                userData.map((user, index) => <User user={user} handleSave={handleSave} handleRemove={handleRemove} key={index}/>)
              }
            </tbody>
          </table>
        }
      </div>
  )
}
export default App
