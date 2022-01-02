import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeFirebase from "../firebase/firebase.init";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const resisterUser = (email, password, name, location, navigate) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to database
                saveUser(email, name, 'POST');

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .catch((err) => setError(err.message));

                // redirect url
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(setIsLoading(false));
    }

    const signInWithEmailPassword = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');

                // save user to database
                saveUser(result.user.email, result.user.displayName, 'PUT');

                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(err => setError(err.message))
            .finally(setIsLoading(false));
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            if (user) {
                setUser(user);
                setError("");
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false))
    }

    // save user details to server
    const saveUser = (email, displayName, method) => {
        setIsLoading(true);
        const user = { email, displayName };

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(() => setIsLoading(false))
    }

    // check admin
    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
                setIsLoading(false);
            });
    }, [user.email]);


    // console.log(admin)
    return {
        user,
        error,
        isLoading,
        admin,
        setUser,
        setError,
        setIsLoading,
        resisterUser,
        signInWithEmailPassword,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;