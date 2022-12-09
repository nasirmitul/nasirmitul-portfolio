import React, { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/dashboard')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='container sign-account'>
            <div className="sign-account-form">
                <form action="" className='sign' onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input type="email" placeholder='Enter Your Email' name='email' required />
                        <input type="password" placeholder='Type Password' name='password' required />
                    </div>
                    <div className="sign-button">
                        <button className='custom-button sign-to-account' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;