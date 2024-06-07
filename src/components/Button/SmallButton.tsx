import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontSize } from '~/lib/theme'
import ButtonProps from './button-props'

export default function SmallButton({ title, onPress, color, borderRadius, source, children }: ButtonProps & {source: any;}) {
    return (
        <Pressable style={[styles.button, { borderRadius }]} onPress={onPress}>
            {children ? children : (
                <>
                    <Image style={styles.icon} source={source} />
                    <Text style={[styles.buttonText, { color }]}>{title}</Text>
                </>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 50,
        aspectRatio: 1
    },
    button: {
        width: 100,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.accent,
        borderRadius: 6,
        gap: 5,
        padding: 8,
    },
    buttonText: {
        fontSize: fontSize.sm,
        fontWeight: '600',
        color: colors.text,
        textAlign: 'center',
    }
})