import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName, setPassword } from '../store/dataSlice';
import { useState,useEffect } from 'react';
const Login = () => {
    const dispatch = useDispatch();
    const userName = useSelector(store => store.data.userName);
    const userPassword = useSelector(store => store.data.password);

    const [username, setUsernameInput] = useState('');
    const [password, setPasswordInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.username && parsedUser.password) {
                dispatch(setUserName(parsedUser));
                dispatch(setPassword(parsedUser));
            }
        }
    }, [dispatch]);

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('Username and password cannot be empty');
            return;
        }
        const Credentials = { username, password };
        localStorage.setItem('user', JSON.stringify(Credentials));

        dispatch(setUserName(username)); 
        dispatch(setPassword(password)); 

        setErrorMessage('');
        alert('Login successful!');

    }
    return (
        <>
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-black'>
        <h3 className='text-center p-10 font-bold text-2xl text-white'>Login Page</h3>
        <div className='flex flex-col md:w-2/5 md:h-1/2 py-9 px-5 bg-gray-300 rounded-xl sm:w-4/5 sm:h-5/6 w-9/12 '>
        <input className='w-full px-3 h-10 my-2 rounded-md focus:outline-none'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsernameInput(e.target.value)}
            />
            <input className='w-full px-3 h-10 my-2 rounded-md focus:outline-none'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button className='bg-gray-700 h-10 mt-10 font-bold text-white text-xl rounded-xl mx-auto px-9 text-center focus:outline-none' onClick={handleLogin}>Login</button>


            <div className='text-center mt-2'>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>
            
        </div>
        </>
        
    )
}

export default Login