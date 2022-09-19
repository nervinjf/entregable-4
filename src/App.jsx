import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './Components/UsersForm'
import UsersList from './Components/UsersList'
import axios from 'axios'
import { set } from 'react-hook-form'

function App() {

  const [ users, setusers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);

  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setusers(res.data))
  }, []);

  const getUsers = () =>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setusers(res.data))
  }

  const selectUsers = ( user ) =>{
    setUserSelected(user)
  }

  const deselectuser = () => setUserSelected(null);


  console.log(userSelected)
  return (
    <div className="App">
     <UsersForm getUsers={getUsers} userSelected={userSelected} deselectuser={deselectuser}/>
     <UsersList users={users} selectUsers={selectUsers} getUsers={getUsers}/>
    </div>
  )
}

export default App
