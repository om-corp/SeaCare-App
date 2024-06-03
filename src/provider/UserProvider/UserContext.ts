import { createContext } from "react";

export const Context = createContext({
    uid: "",
    name: "",
    setName: (value: string) => { },
    email: "",
    setEmail: (value: string) => { },
    password: "",
    setPassword: (value: string) => { },
});