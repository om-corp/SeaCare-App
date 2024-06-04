import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { RootStackParamList } from "~/navigation/stack";
import { auth } from "~/utils/firebase";

type NavigationProps = StackNavigationProp<RootStackParamList, 'Login'>

export async function HandleLogin(email: string, password: string) {
    const navigation = useNavigation<NavigationProps>()

    await signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate('Access'))
        .catch((error) => Alert.alert('Erro', error))
}