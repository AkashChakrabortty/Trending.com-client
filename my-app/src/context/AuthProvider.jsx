import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut, updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const userInfo = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        // console.log(user)
      } else {
        setUser();
      }
    });
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  const updateUser = (displayName, email) => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .then(() => {
      })
      .catch((error) => {
        alert("something wrong");
      });
  };
 




  // console.log(loading);
  const authInfo = {
    googleSignIn,
    createUser,
    login,
    logout,
    user,
    setUser,
    updateUser,
    loading,
    setLoading,
  };
  return (
    <div>
      <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
    </div>
  );
};

export default AuthProvider;
