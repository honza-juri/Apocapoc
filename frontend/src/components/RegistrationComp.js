import React, { useState } from 'react';
import axios from 'axios';
import '../components-css/RegistrationComp.css';

const RegistrationComp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            setMessage({ type: 'error', text: 'All fields are required.' });
            resetMessage();
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match.' });
            resetMessage();
            return;
        }

        try {
            const response = await axios.post('/api/register', formData);
            setMessage({ type: 'success', text: response.data.message });
            resetMessage();
        } catch (error) {
            if (error.response) {
                // Server responded with a status code outside of 2xx range
                setMessage({ type: 'error', text: error.response.data.message });
                resetMessage();
            } else if (error.request) {
                // The request was made but no response was received
                setMessage({ type: 'error', text: 'Network error. Please try again later.' });
                resetMessage();
            } else {
                // Something happened in setting up the request that triggered an error
                setMessage({ type: 'error', text: `Error: ${error.message}` });
                resetMessage();
            }
        }
    };

    const resetMessage = () => {
        setTimeout(() => {
            setMessage(null);
        }, 4000); // Reset message after 4 seconds
    };

    return (
        <div className='registration-container'>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label className='form-label' htmlFor="username">Username:</label>
                <input className='form-input' type="text" id="username" name="username" value={formData.username} onChange={handleChange} />

                <label className='form-label' htmlFor="email">Email:</label>
                <input className='form-input' type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                <label className='form-label' htmlFor="password">Password:</label>
                <input className='form-input' type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

                <label className='form-label' htmlFor="confirmPassword">Confirm Password:</label>
                <input className='form-input' type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
            {message && (
                <div className={`message-container`}>
                    <div className={`message ${message.type} show`}>
                        {message.text}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationComp;
