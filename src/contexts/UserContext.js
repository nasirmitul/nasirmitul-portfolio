import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    //Login User Account
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Check currently logged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('auth state Changed', currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    //logout
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = { user, loading, loginUser, logoutUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;