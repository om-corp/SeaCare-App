import { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from '~/components/button';
import { UserContext } from '~/provider/user-provider'

export function Signup() {

    const { name, email, password, cep, phone, setName, setEmail, setPassword, HandleSignup } = useContext(UserContext)

    const [repeatPassword, setRepeatPassword] = useState("");

    return (
        <View>
            <TextInput placeholder='Seu nome' value={name} onChangeText={(value) => setName(value)} />
            <TextInput placeholder='example@domain.com' value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder='Uma senha forte' value={password} onChangeText={(value) => setPassword(value)} />
            <TextInput placeholder='Repetir senha' value={repeatPassword} onChangeText={(value) => setRepeatPassword(value)} />

            <Button title='Cadastrar' onPress={() => HandleSignup({ name, email, password, cep, phone })} />
        </View>
    )
}