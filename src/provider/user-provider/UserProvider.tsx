import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { Alert } from "react-native";
import { firestore, auth } from "~/utils/firebase";



import UserContext from "./user-context";


export default function UserProvider({ children }: { children: any }) {

    const [uid, setUid] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cep, setCep] = useState('')
    const [phone, setPhone] = useState('')


    const handleLogin = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(
                // Success
                () => {
                },
                // Failure
                (reason) => {
                    Alert.alert('Erro no login!', reason)
                    setEmail('');
                    setPassword('');
                }
            )
            .catch(error => {
                console.log('Erro ao tentar entrar na conta: ' + error);
                Alert.alert('Ooops', 'Ocorreu um erro ao tentar entrar em sua conta\nFavor validar se seus dados estão corretos');
                setEmail('');
                setPassword('');
            })
    }


    const handleForgotPassword = async (email: string, setEmail: (value: string) => void) => {

        await sendPasswordResetEmail(auth, email)
            .then(
                // Success
                () => {
                    Alert.alert('Email de confirmação', 'Um email de confirmação foi enviado a ' + email)
                },
                // Failure
                (reason) => {
                    Alert.alert('Erro no envio!', reason);
                })

            .catch(error => {
                console.log("Erro ao tentar processar request de forgotpassword: " + error)

                Alert.alert('Erro no envio!', 'Alguma coisa deu errado...')
            });
    }


    const handleLogout = async () => {
        await signOut(auth);

        setName('');
        setEmail('');
        setPassword('');
        setCep('');
        setPhone('');
    }


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