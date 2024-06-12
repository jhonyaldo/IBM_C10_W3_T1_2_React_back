import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!password) {
            validationErrors.password = 'Password is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission
            console.log('Form submitted successfully');
        }
    };

    return (
        <div className="container">
            <div className="login-grid">
                <div className="login-text">
                    <h2>Login</h2>
                </div>
                <div className="login-text">
                    Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}> Sign Up Here</a></span>
                </div>
                <br />
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <small className="error-text">{errors.email}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <small className="error-text">{errors.password}</small>}
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => { setEmail(''); setPassword(''); setErrors({}); }}>Reset</button>
                        </div>
                        <br />
                        <div className="login-text">
                            Forgot Password?
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
