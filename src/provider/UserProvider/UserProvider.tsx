import { useState } from "react";
import { auth } from "~/utils/firebase";

import { Context } from "./UserContext";


export function UserProvider({ children }: { children: any }) {
    const [uid, setuid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    auth.onAuthStateChanged((user) => {
        if (user) {
            setuid(user.uid);
        } else {
            console.log("nada ainda");
        }
    })

    return (
        <Context.Provider value={{ uid, name, setName, email, setEmail, password, setPassword }}>
            {children}
        </Context.Provider>
    )
}