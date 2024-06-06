import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import Button from '~/components/button'
import { RootStackParamList } from '~/navigation'
import { UserContext } from '~/provider/user-provider'
import { auth } from '~/utils/firebase'

type NavigationProps = StackNavigationProp<RootStackParamList, 'Access'>

export function Login() {
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
            <View>
                <TextInput placeholder='Email' value={email} onChangeText={(value) => setEmail(value)} />
                <TextInput placeholder='Senha' value={password} onChangeText={(value) => setPassword(value)} />

                <Text onPress={() => navigation.replace('Cadastro')}>Não possui uma conta?</Text>

                <Button.Filled title='Entrar' onPress={() => handleLogin(email, password)} />

            </View>
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