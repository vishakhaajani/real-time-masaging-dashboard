import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Email and password are required!");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = existingUsers.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login successful!");
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            navigate("/dashboard");
        } else {
            alert("Invalid email or password.");
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
                <form onSubmit={handleLogin}>
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
