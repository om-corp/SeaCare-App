import { createContext } from "react";

const UserContext = createContext({
    uid: "",
    name: "", setName: (value: string) => { },
    email: "", setEmail: (value: string) => { },
    password: "", setPassword: (value: string) => { },
    cep: "", setCep: (value: string) => { },
    phone: "", setPhone: (value: string) => { },

    handleUserDataCollection: () => { },
    cleanUserInputs: () => { },
});

export default UserContext;