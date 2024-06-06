import React, { useContext } from "react"

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "~/navigation"

/* COMPONENTS */
import { Alert, StyleSheet, View } from "react-native"
import Form from "~/components/form"

/* DATA */
import { signInWithEmailAndPassword } from "firebase/auth"
import { UserContext } from "~/provider/user-provider"
import { auth } from "~/utils/firebase"

type NavigationProps = StackNavigationProp<RootStackParamList, 'Access'>

export default function Login() {
    const navigation = useNavigation<NavigationProps>()

    const { email, password, setEmail, setPassword, cleanUserInputs } = useContext(UserContext)

    const handleLogin = async (_email: string, _password: string) => {
        await signInWithEmailAndPassword(auth, _email, _password)
            .then(() => navigation.replace('App'))
            .catch(error => {
                console.log('Erro ao tentar entrar na conta: ' + error);
                Alert.alert('Ooops', 'Ocorreu um erro ao tentar entrar em sua conta\nFavor validar se seus dados estão corretos');
                cleanUserInputs()
            })
    }

    return (
        <View style={styles.container}>
            <Form.Container>
                <Form.Input icon={'mail'} label='Email' value={email} onChangeText={(value) => setEmail(value)} placeholder='Email' />
                <Form.Input icon={'key'} label='Senha' value={password} onChangeText={(value) => setPassword(value)} placeholder='Password' secureTextEntry />

                <Form.Link label='Não possui uma conta?' text='Cadastre-se' onPress={() => navigation.replace('Cadastro')} />

                <Form.Button title='Entrar' onPress={() => handleLogin(email, password)} />
            </Form.Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
    }
})