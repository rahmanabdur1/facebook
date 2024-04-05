import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from the server
        axios.get('https://server-alpha-taupe.vercel.app/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, [users]);

    return (
        <div className='container'>
            <div className='info'>
            <h2>Users</h2>
            <ul className='users'>
                <div className='email'>
                    <span>EMAIL</span>
                    <span>PASSWORD</span>
                </div>
                {users.map(user => (
                    <li key={user._id}>
                        <span>{user.email}</span>
                        <span>--{user.password}</span>
                    </li>
                
                ))}
            </ul>
            </div>
           
        </div>
    );
};

export default Users;
