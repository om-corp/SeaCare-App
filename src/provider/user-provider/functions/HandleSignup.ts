import { useNavigation } from "@react-navigation/native"
import UserProps from "../UserProps"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "~/navigation/stack"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, firestore } from "~/utils/firebase"
import { doc, setDoc } from "firebase/firestore"
import { Alert } from "react-native"

type NavigationProps = StackNavigationProp<RootStackParamList, 'Cadastro'>

export async function HandleSignup(user: UserProps) {
    const navigation = useNavigation<NavigationProps>()

    await createUserWithEmailAndPassword(auth, user.name, user.password)
        .then((cred) => setDoc(doc(firestore, 'voluntarios', cred.user.uid), user))
        .then(() => Alert.alert('Sucesso!', 'Cadastrado com sucesso, realize login para entrar na sua conta'), (reason) => Alert.alert('Erro', reason))
        .catch((error) => Alert.alert('Erro', error))
}