import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import { setTokenCookie } from "../utils/cookies";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "", 
        password: ""
    })

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        const { name, value } = e.target

        setCredentials(prev => ({ 
            ...prev,
            [name]: value
        }));
    };    

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await loginUser(credentials)

            const token = response.data?.token
            setTokenCookie(token)

            navigate('/profile')
        } catch (error) {
            alert(err.response?.data?.message || "Login failed")   
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2> Login </h2>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Enter your email" required/>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Enter your password" required/>
            <button type="submit"> Login </button>
        </form>
    )
}

export default Login