import React from 'react';
import "../components-css/LoginComp.css";

function Login() {
    return (
        <div className='login-container'>
            <h2>Login To Your Account!</h2>
            <form>
                <input type='text' id='username' className='form-input' placeholder='Username' required />
                <input type='password' id='password' className='form-input' placeholder='Password' required />
                <label className='checkbox-container'>
                    <input type='checkbox' id='remember' className='form-check' />
                    Remember me
                </label>
                <a href='' className='forgot-pw'>Forgot password?</a>
                <button type='submit' className='form-button'>Login</button>
            </form>
            <p>Not Registered yet? <a href='' className='sign-up'>Sign-Up</a></p>
        </div>
    );
}

export default Login;