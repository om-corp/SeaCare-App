import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { firestore, auth } from "~/utils/firebase";


import UserContext from "./user-context";


export default function UserProvider({ children }: { children: any }) {

    const [uid, setUid] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cep, setCep] = useState('')
    const [phone, setPhone] = useState('')


    const handleDataCollection = () => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const docRef = doc(firestore, 'usuarios', currentUser.uid);
                const docData = getDoc(docRef);
                docData.then(doc => {
                    const userData = doc.data();
                    if (userData) {
                        setName(userData.name)
                        setEmail(userData.email)
                        setPassword(userData.password)
                        setCep(userData.cep)
                        setPhone(userData.phone)
                    }
                })
            }
        })
    }


    const cleanInputs = () => {
        setName('')
        setEmail('')
        setPassword('')
        setCep('')
        setPhone('')
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            } else {
                setUid('');
            }
        })

        return () => unsubscribe();
    }, [])



    return (
        <UserContext.Provider value={{
            uid, name, email, password, cep, phone,
            setName, setEmail, setPassword, setPhone, setCep,
            handleUserDataCollection: handleDataCollection,
            cleanUserInputs: cleanInputs
        }}>
            {children}
        </UserContext.Provider>
    )
}