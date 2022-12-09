import React, { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Dashboard = () => {
    const {logoutUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = () => {
        logoutUser();
        navigate('/')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    );
};

export default Dashboard;