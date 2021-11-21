import { useEffect, useState } from "react";
import initializeFireBase from '../firebase/firebase.init'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeFireBase();
// all firebase hoooks settng is here 
const useFireBase = () => {
    const [name, setName] = useState();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const [isLoading, setIsloading] = useState(true);

    const auth = getAuth();
    const googleProvide = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvide)
    }
    const logOutUser = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            setUser({});
            setError('')
        }).catch((error) => {
            const errMsg = error.message;
            setError(`${errMsg}`)
        }).finally(() => setIsloading(false))
    }
    const createUserWithEmailPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setError('Account Creating Success, please login..');
                getName();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorCode} - ${errorMessage}`)
            });
    }
    const loginWithEmailPassword = () => {
        return signInWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     setUser(user);
        //     setError('')
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     setError(`${errorCode} - ${errorMessage}`)
        // });
    }
    const getName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                // Profile updated!
                // ...
            }).catch((error) => {
                setError('something went wrong')
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

            }
            setIsloading(false)
        });
    }, [auth])
    setTimeout(() => {
        setError('')
    }, 6000)

    return {
        googleSignIn,
        user,
        setUser,
        error,
        setError,
        logOutUser,
        createUserWithEmailPassword,
        setEmail,
        setPassword,
        loginWithEmailPassword,
        setName,
        isLoading,
        setIsloading

    }
}
export default useFireBase;