import { useState } from "react";
import { auth } from "~/utils/firebase";

import { HandleForgotPassword, HandleLogin, HandleLogout, HandleSignup } from "./functions";
import UserContext from "./UserContext";

export default function UserProvider({ children }: { children: any }) {
    const [uid, setuid] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cep, setCep] = useState("")
    const [phone, setPhone] = useState("")

    auth.onAuthStateChanged((user) => {
        if (user) {
            setuid(user.uid)
        }
    })

    return (
        <UserContext.Provider value={{
            uid, name, email, password, cep, phone,
            setName: (value: string) => setName(value),
            setEmail: (value: string) => setEmail(value),
            setPassword: (value: string) => setPassword(value),
            setCep: (value: string) => setCep(value),
            setPhone: (value: string) => setPhone(value),
            HandleForgotPassword, HandleLogin, HandleLogout, HandleSignup
        }}>
            {children}
        </UserContext.Provider>
    )
}