import React, { useState } from 'react'

/* COMPONENTES */
import { Alert, StyleSheet, Text, View } from 'react-native'
import { colors, fontSize } from '~/lib/theme'
import Button from '~/components/button'
import Input from '~/components/input'

/* DATA */
import { auth } from '~/utils/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'


export default function ForgotPasswordModal({ setShowModal }: { setShowModal: (value: boolean) => void }) {
    const [resetEmail, setResetEmail] = useState('')

    const validarEmail = (_email: string) => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        return re.test(_email)
    }

    const handleForgotPassword = async (_email: string) => {
        if (!_email) {
            Alert.alert('Erro', 'Endereço de email não pode ser vazio')
        } else if (!validarEmail(_email)) {
            Alert.alert('Erro', 'Endereço de email inválido')
        } else {
            await sendPasswordResetEmail(auth, _email)
                .then(
                    () => Alert.alert('Email de confirmação', 'Um email de confirmação foi enviado a ' + _email),
                    (reason) => Alert.alert('Erro no envio!', reason)
                )
                .catch(error => {
                    console.log("Erro ao tentar processar request de forgotpassword: " + error)
                    Alert.alert('Erro no envio!', 'Alguma coisa deu errado...')
                });
            setShowModal(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ gap: 20, marginBottom: 10 }}>
                <Text style={styles.title}>Esqueceu sua senha</Text>
                <Text style={styles.text}>Digite o endereço de e-mail para o qual deseja que suas informações de redefinição de senha sejam enviadas</Text>
            </View>

            <Input label='Email' placeholder='Email' value={resetEmail} onChangeText={(value) => setResetEmail(value)} />

            <View style={{ gap: 10, marginTop: 20 }}>
                <Button.Filled onPress={() => handleForgotPassword(resetEmail)}>Redefinir senha</Button.Filled>
                <Button.Outline borderWidth={0} onPress={() => setShowModal(false)}>Voltar ao login</Button.Outline>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.accent,
        borderRadius: 6,
        gap: 20,
        marginHorizontal: 10,
        paddingHorizontal: 25,
        paddingVertical: 50,
    },
    title: {
        color: colors.text,
        fontSize: fontSize.xl,
        fontWeight: '600',
    },
    text: {
        fontSize: fontSize.base,
        color: colors.text,
    }
})