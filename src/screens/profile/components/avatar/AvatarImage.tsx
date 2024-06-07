import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '~/lib/theme'

export default function AvatarImage({ onPress }: { onPress: TouchableOpacityProps['onPress'] }) {
    return (
        <View style={{}}>
            <Image style={styles.profilePicture} source={require('~/assets/user/default-avatar.jpg')} />
            <TouchableOpacity style={styles.edit} onPress={onPress}>
                <Feather size={20} color={colors.background} name='camera' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        aspectRatio: 1,
        alignItems: 'center',
        borderWidth: 2,
        height: 150,
    },
    profilePicture: {
        aspectRatio: 1,
        borderRadius: 200,
        height: 150,
    },
    edit: {
        aspectRatio: 1,
        position: 'absolute',
        padding: 8,
        backgroundColor: colors.black,
        borderRadius: 50,
        bottom: 0,
        right: 0,
    },
})