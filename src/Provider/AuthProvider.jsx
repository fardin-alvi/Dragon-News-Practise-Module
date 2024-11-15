import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const Authcontext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createNewuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateprofile = (updatedate) => {
        return updateProfile(auth.currentUser,updatedate)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            setLoading(false)
        })
        return () => {
            unsubscribe() 
       }
    },[])

    const authinfo = {
        createNewuser,
        user,
        setUser,
        logout,
        login,
        loading,
        updateprofile
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
       </Authcontext.Provider>
    );
};

export default AuthProvider;