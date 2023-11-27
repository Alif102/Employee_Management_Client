/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";



//  const { createContext, useState, useEffect } = require("react");


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    // Sign in
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    useEffect(()=> {
        const unSubscribe =onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return ()=> {
            return unSubscribe();
        } 
    },[])

    const authentications = {
        createUser,
        user,
        loading,
        signIn,
        LogOut,
        handleUpdateProfile
    }

  return (
    <div>
        <AuthContext.Provider value={authentications}>
        {children}

    </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider