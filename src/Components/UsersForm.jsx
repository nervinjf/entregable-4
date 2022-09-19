import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const UsersForm = ({ getUsers, userSelected, deselectuser }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() =>{
        if(userSelected){
            reset(userSelected)
        }
    }, [ userSelected ]);

    const submit = (data) =>{
        if(userSelected){
            // Actualizando un usuario
            axios.put(`https://users-crud1.herokuapp.com/users/${data.id}/`, data)
            .then(() => getUsers())
            
        }else{
            //Crenado un usuario
            axios.post(`https://users-crud1.herokuapp.com/users/`, data)
            .catch(error => console.log(error.response))
            .then(() => getUsers())
        }
        clear();
    }

    const clear = () =>{
        reset({
                id: "",
                email: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: ""
              })
              deselectuser()
    }

    return (
        <div className='form'>
        <form onSubmit={handleSubmit(submit)}>
            <h2>New user</h2>
            <div className='forms-cars'>
                <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>
                <input type="text" id="first_name" placeholder="Firstname" {...register("first_name")}/>
                <input type="text" id="last_name" placeholder="Lastname" {...register("last_name")}/>
            </div>
            <div className='forms-cars input'>
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                <input type="email" id="email" placeholder="Email" {...register("email")}/>
            </div>
            <div className='forms-cars input'>
                <label htmlFor="pass"><i class="fa-solid fa-lock"></i></label>
                <input type="password" id="pass" placeholder="Password" {...register("password")}/>
            </div>
            <div className='forms-cars input'>
                <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
                <input type="date" id="birthday" {...register("birthday")}/>
            </div>
            <div className='button'>
                <button className='submit-form'>submit</button>
            </div>
            <div className='button2'>
                <button className='submit-form2' type='button' onClick={clear}>Clear</button>
            </div>
            
        </form>
        </div>
    );
};

export default UsersForm;