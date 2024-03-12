import React from 'react';

function Login() {
    return (
        <div className='container'>
            <h2>Login to your account</h2>
            <form>
                <input type='text' className='form-input' placeholder='Username' required />
                <input type='password' className='form-input' placeholder='Password' required />
                <input type='checkbox' className='form-input' />
                <label className='form-label'>Remember me</label>
                <a href=''>Forgot password?</a>
                <button type='submit' className='form-button'>Login</button>
            </form>
            <p>Not Registered yet? <a href=''>Sign up here</a></p>
        </div>
    );
}

export default Login;