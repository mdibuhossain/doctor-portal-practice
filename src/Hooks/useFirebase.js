import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initAuth from '../Firebase/initAuth';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const userRegister = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }

    const logIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message);
            setIsLoading(true);
        }).finally(() => setIsLoading(false))
    }

    const signWithGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const newUser = result.user;
                setError('');
                saveUser(newUser.email, newUser.displayName, "PUT");
                setUser(newUser);
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }

    return {
        user,
        logIn,
        logOut,
        userRegister,
        error,
        setError,
        isLoading,
        signWithGoogle
    }

}

export default useFirebase;