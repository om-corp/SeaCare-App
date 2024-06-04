import { useEffect, useState } from "react";
import { auth } from "~/utils/firebase";

import { HandleForgotPassword, HandleLogin, HandleLogout, HandleSignup } from "./functions";
import UserContext from "./user-context";
import { onAuthStateChanged } from "firebase/auth";

export default function UserProvider({ children }: { children: any }) {
    const [uid, setuid] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cep, setCep] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setuid(user.uid);
            else setuid('');
        })

        return () => unsubscribe();
    }, [])

    return (
        <UserContext.Provider value={{
            uid, name, email, password, cep, phone,
            setName, setEmail, setPassword, setCep, setPhone,
            HandleForgotPassword, HandleLogin, HandleLogout, HandleSignup,
        }}>
            {children}
        </UserContext.Provider>
    )
}