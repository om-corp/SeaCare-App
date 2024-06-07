import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '~/provider/user-provider'
import { colors, fontSize } from '~/lib/theme'
import { Feather } from '@expo/vector-icons'
import Button from '~/components/button'
import { signOut } from 'firebase/auth'
import { auth } from '~/utils/firebase'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '~/navigation'
import Avatar from './components/avatar'

type NavigationProps = StackNavigationProp<RootStackParamList, 'App'>

export default function Profile() {
    const navigation = useNavigation<NavigationProps>();

    const { name, email, phone, handleUserDataCollection, cleanUserInputs } = useContext(UserContext)

    const handleLogout = async () => {
        signOut(auth)
        navigation.replace('Access')
        cleanUserInputs()
    }

    useEffect(() => {
        handleUserDataCollection()
    }, [])

    return (
        <View style={styles.container}>

            <Avatar username={name} email={email} phone={phone} />
            <View style={styles.buttons}>
                <Button.Outline color={colors.error} onPress={() => handleLogout()}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Feather size={20} color={colors.error} name='log-out' />
                        <Text style={[styles.buttonText, { color: colors.error }]}>Sair</Text>
                    </View>
                </Button.Outline>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 50,
        gap: 20,
        justifyContent: 'flex-end'
    },
    buttonText: {
        fontSize: fontSize.base,
        fontWeight: '600',
        textAlign: 'center',
    },


})