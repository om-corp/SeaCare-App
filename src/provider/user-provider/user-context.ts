import { createContext } from "react";
import UserProps from "./user-props";
import { HandleForgotPassword, HandleLogin, HandleLogout, HandleSignup } from "./functions";

const UserContext = createContext({
    uid: "",
    name: "", setName: (value: string) => { },
    email: "", setEmail: (value: string) => { },
    password: "", setPassword: (value: string) => { },
    cep: "", setCep: (value: string) => { },
    phone: "", setPhone: (value: string) => { },
    HandleForgotPassword, HandleLogin, HandleLogout, HandleSignup,
});

export default UserContext;