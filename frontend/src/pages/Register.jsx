import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prev => ({ 
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await registerUser(formData)
            navigate('/login')
        } catch (error) {
            alert(err.response?.data?.message || "Registration failed")   
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2> Register </h2>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
            <input name="email" value={formData.email} type="email" onChange={handleChange} placeholder="Enter your email" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
            <input name="password" value={formData.password} type="password" onChange={handleChange} placeholder="Enter your password" required />
            <button type="submit"> Register </button>
        </form>
    )
}

export default Register