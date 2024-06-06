import React, { useContext } from "react"

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "~/navigation"

/* COMPONENTS */
import { Alert, StyleSheet, View } from "react-native"
import Form from "~/components/form"

/* DATA */
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { auth, firestore } from "~/utils/firebase"
import { UserContext, UserProps } from "~/provider/user-provider"

/* STYLE */
import { fontSize, colors } from "~/lib/theme"

type NavigationProps = StackNavigationProp<RootStackParamList, 'Access'>

export default function Signup() {
    const navigation = useNavigation<NavigationProps>()

    const { cep, email, name, password, phone, setEmail, setName, setPassword, cleanUserInputs } = useContext(UserContext)


    const handleSignup = async (_user: UserProps) => {
        await createUserWithEmailAndPassword(auth, _user.email, _user.password)
            .then(cred => {
                setDoc(doc(firestore, 'usuarios', cred.user.uid), _user)
                Alert.alert('Cadastrado com sucesso!', 'Realize login para entrar na sua conta')
                navigation.replace('Login')
            })
            .catch(error => {
                console.log(error);
                Alert.alert('Erro no envio!', `Ocorreu um erro ao tentar criar sua conta.\n\nTente novamente mais tarde, ou entre em contato com omcorp.helpcenter@gmail.com`);
            })
            .finally(() => cleanUserInputs)
    }


    return (
        <View style={styles.container}>
            <Form.Container>
                <Form.Input icon={'person'} label='Nome' value={name} onChangeText={(value) => setName(value)} placeholder='Name' />
                <Form.Input icon={'mail'} label='Email' value={email} onChangeText={(value) => setEmail(value)} placeholder='Email' />
                <Form.Input icon={'key'} label='Senha' value={password} onChangeText={(value) => setPassword(value)} placeholder='Password' secureTextEntry />

                <Form.Link label='Já tem uma conta?' text='Acessar' onPress={() => navigation.replace('Login')} />

                <Form.Button title='Cadastrar-se' onPress={() => handleSignup({ cep, email, name, password, phone, })} />
            </Form.Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
    },
    label: {
        fontSize: fontSize.lg,
        fontWeight: '600',
        marginBottom: 20,
    },
    input: {
        fontSize: fontSize.base,
        borderColor: colors.accent,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 20,
        color: colors.text,
        backgroundColor: colors.background,
        // elevation: 5,
    },
    link: {
        color: colors.info,
        fontWeight: '600',
        fontSize: fontSize.sm,
    },
})