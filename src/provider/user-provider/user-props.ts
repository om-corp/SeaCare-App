export default interface UserProps {
    name: string;
    email: string;
    password: string;
    cep: string;
    phone: string;
    profilePicture: {uri: string};
    profileBackground: string;
}