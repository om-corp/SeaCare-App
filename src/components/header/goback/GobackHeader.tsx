import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '~/lib/theme'

export default function GobackHeader({ navigation, color = colors.background }: { navigation: any, color?: string }) {
    return (
        <View style={styles.container}>
            <Feather
                name='arrow-left'
                color={color}
                size={50}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        left: 10,
        position: 'absolute',
        top: 20,
        width: '100%',
    }
})