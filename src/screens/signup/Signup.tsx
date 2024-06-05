import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import Button from '~/components/button';
import { RootStackParamList } from '~/navigation';
import { UserContext } from '~/provider/user-provider';
import { auth, firestore } from '~/utils/firebase';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Access'>

export function Signup() {
    const navigation = useNavigation<NavigationProps>()

    const { cep, email, name, password, phone, setEmail, setName, setPassword, cleanUserInputs } = useContext(UserContext)


    const handleSignup = async (_name: string, _email: string, _password: string, _cep: string, _phone: string) => {
        await createUserWithEmailAndPassword(auth, _email, _password)
            .then(cred => setDoc(doc(firestore, 'usuarios', cred.user.uid), { name: _name, email: _email, password: _password, cep: _cep, phone: _phone }))
            .then(() => Alert.alert('Cadastrado com sucesso!', 'Realize login para entrar na sua conta'))
            .then(() => navigation.replace('Login'))
            .catch(error => {
                console.log(error);
                Alert.alert('Erro no envio!', `Ocorreu um erro ao tentar criar sua conta.\n\nTente novamente mais tarde, ou entre em contato com omcorp.helpcenter@gmail.com`);
            })
            cleanUserInputs()
    }


    return (
        <View style={styles.container}>
            <View>
                <TextInput placeholder='Seu nome' value={name} onChangeText={(value) => setName(value)} />
                <TextInput placeholder='example@domain.com' value={email} onChangeText={(value) => setEmail(value)} />
                <TextInput placeholder='Uma senha forte' value={password} onChangeText={(value) => setPassword(value)} />

                <Button.Filled title='Cadastrar' onPress={() => handleSignup(name, email, password, cep, phone)} />

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