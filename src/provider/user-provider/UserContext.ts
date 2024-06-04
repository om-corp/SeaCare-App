import { createContext } from "react";
import { HandleForgotPassword, HandleLogin, HandleLogout, HandleSignup } from "./functions";

const UserContext = createContext({
    uid: "",
    name: "", setName: (value: string) => { },
    email: "", setEmail: (value: string) => { },
    password: "", setPassword: (value: string) => { },
    cep: "", setCep: (value: string) => { },
    phone: "", setPhone: (value: string) => { },
    HandleLogin, HandleSignup, HandleForgotPassword, HandleLogout,
});

export default UserContext;