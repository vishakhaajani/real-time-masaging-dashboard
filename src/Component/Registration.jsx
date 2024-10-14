import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert("Form can't be empty!");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = existingUsers.some(user => user.email === email);
        if (userExists) {
            alert("User is already registered!");
            return;
        }

        const newUser = {
            id: Math.floor(Math.random() * 10000), 
            name,
            email,
            password,
        };

        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers)); 
        alert("Registered successfully!");
        setName(""); 
        setEmail("");
        setPassword("");
        navigate("/login"); 
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold text-center mb-6'>Registration</h2>
                <form onSubmit={handleRegistration}>
                    {/* Username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Enter your username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    {/* Password */}
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700 font-medium mb-2'>Password</label>
                        <input
                            type="password"
                            id='password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none'
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full text-white bg-indigo-500 font-semibold py-2 rounded-lg hover:bg-indigo-600 transition duration-300'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
