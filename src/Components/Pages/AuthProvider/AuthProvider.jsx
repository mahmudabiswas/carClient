import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create user

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // auth state

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      console.log(user);
      const userEmail = createUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setLoading(false);
      setUser(createUser);
      if (createUser) {
        axios
          .post(`http://localhost:5000/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post(`http://localhost:5000/logOut`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  // logOut

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { user, loading, createUser, signIn, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
