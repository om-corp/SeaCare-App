import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { InputProps } from './input-props'
import { Ionicons } from '@expo/vector-icons'
import { colors, fontSize } from '~/lib/theme'

export default function Input({ label, placeholder, value, onChangeText, secureTextEntry = false, icon }: InputProps) {
    return (
        <View style={{ gap: 20 }}>
            {label ? (
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    {icon ? <Ionicons name={icon} size={20} color={colors.text} /> : <></>}
                    <Text style={styles.label}>{label}</Text>
                </View>
            ) : <></>}
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.border}
                    secureTextEntry={secureTextEntry}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: colors.text,
        fontSize: fontSize.lg,
        fontWeight: '600',
    },
    input: {
        borderColor: colors.border,
        borderRadius: 6,
        borderWidth: 1,
        color: colors.text,
        fontSize: fontSize.base,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
})