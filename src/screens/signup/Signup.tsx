import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert, Pressable } from 'react-native'
import Button from '~/components/button';
import Form from '~/components/form/Form';
import { colors, fontSize } from '~/lib/theme';
import { RootStackParamList } from '~/navigation';
import { UserContext, UserProps } from '~/provider/user-provider';
import { auth, firestore } from '~/utils/firebase';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Access'>

export function Signup() {
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
                <Form.Input label='Nome' value={name} onChangeText={(value) => setName(value)} placeholder='Name' />
                <Form.Input label='Email' value={email} onChangeText={(value) => setEmail(value)} placeholder='Email' />
                <Form.Input label='Senha' value={password} onChangeText={(value) => setPassword(value)} placeholder='Password' />

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