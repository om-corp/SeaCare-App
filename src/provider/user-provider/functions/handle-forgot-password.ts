import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { sendPasswordResetEmail } from "firebase/auth";
import { Alert } from "react-native";
import { RootStackParamList } from "~/navigation/navigation-stack";
import { auth } from "~/utils/firebase";


type NavigationProps = StackNavigationProp<RootStackParamList, 'Login'>

export default async function HandleForgotPassword(email: string) {
    const navigation = useNavigation<NavigationProps>()
    
    await sendPasswordResetEmail(auth, email)
        .then(() => Alert.alert('Verifique sua caixa de entrada!', 'Enviamos instruções no email informado para alterar sua senha.'))
        .catch((error) => Alert.alert('Erro', error))
}