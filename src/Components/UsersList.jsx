import React from 'react';
import axios from 'axios';

const UsersList = ({ users, selectUsers, getUsers }) => {

    const deleteuser = ( id ) =>{
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers())
      }

    return (
        <div className='card-grid'>
            {
                users.map(user => (
                    <div className='card' key={user.id}>
                        <div className='name'>
                            <h3>{user.first_name} {user.last_name}</h3>
                        </div>
                        <div className='container-data'>
                            <p className='subtitle'>CORREO</p>
                            <p>{user.email}</p>
                            <p className='subtitle'>PASSWORD</p>
                            <p>{user.password}</p>
                            <p className='subtitle'>CUMPLEAÑOS</p>
                            <p>{user.birthday}</p>
                        </div>
                        <div className='container-edit-delete'>
                            <div className='edit-delete'>
                                <button onClick={() => deleteuser(user.id)}><i class="fa-regular fa-trash-can"></i></button>
                                <button onClick={() => selectUsers(user)}><i class="fa-regular fa-pen-to-square"></i></button>
                            </div>

                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default UsersList;