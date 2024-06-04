import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Alert } from "react-native";
import { RootStackParamList } from "~/navigation";
import { auth, firestore } from "~/utils/firebase";
import UserProps from "../user-props";


type NavigationProps = StackNavigationProp<RootStackParamList, 'Cadastro'>

export default async function HandleSignup({ cep, email, name, password, phone, }: UserProps) {
    const navigation = useNavigation<NavigationProps>()

    console.log("HandleSignup chamado");

    await createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => setDoc(doc(firestore, 'voluntarios', cred.user.uid), { cep, email, name, password, phone, }))
        .then(() => Alert.alert('Sucesso!', 'Cadastrado com sucesso, realize login para entrar na sua conta'), (reason) => Alert.alert('Erro', reason))
        .catch((error) => Alert.alert('Erro', error))

    console.log("HandleSignup finalizado");
}