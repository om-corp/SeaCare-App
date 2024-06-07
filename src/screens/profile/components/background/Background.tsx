import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '~/lib/theme'

export default function Background() {
    return (
        <View style={{ position: 'absolute', alignSelf: 'center', }}>
            <Image style={styles.backgroundImage} source={require('~/assets/user/default-background.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        justifyContent: 'center',
        backgroundColor: colors.accent,
        height: 200,
        objectFit: 'fill',
    },
})