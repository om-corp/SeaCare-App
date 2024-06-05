import React from 'react'
import { Text, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'
import { theme } from '~/lib/theme'

export default function LoadingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size={50} color={theme.colors.primary} />
            <Text>Carregando...</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        gap: 25,
        justifyContent: 'center',
    }
})