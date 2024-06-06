import React from 'react'

/* COMPONENTS */
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { InputProps, LinkProps } from './form-props'
import { ButtonFilledProps } from '../button/button-props'
import Button from '../button'

/* STYLE */
import { colors, fontSize } from '~/lib/theme'

class Form {
    Container = ({ children }: any) => (
        <View style={{ gap: 20 }}>
            {children}
        </View>
    )

    Input = ({ label, placeholder, value, onChangeText, secureTextEntry = false, icon }: InputProps) => (
        <View style={{ gap: 20 }}>
            <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                {icon ? <Ionicons name={icon} size={20} color={colors.text} /> : <></>}
                <Text style={styles.label}>{label}</Text>

            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.accent}
                    secureTextEntry={secureTextEntry}
                />

            </View>
        </View>
    )

    Link = ({ label, text, onPress }: LinkProps) => (
        <View style={{ flexDirection: 'row', gap: 5 }}>
            {label ? <Text style={{ fontSize: fontSize.sm }}>{label}</Text> : <></>}
            <Text style={styles.link} onPress={onPress}>{text}</Text>
        </View>
    )

    Button = ({ title, onPress, color, backgroundColor, borderRadius }: ButtonFilledProps) => (
        <Button.Filled
            title={title}
            onPress={onPress}
            color={color}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
    },
    label: {
        fontSize: fontSize.lg,
        fontWeight: '600',
    },
    input: {
        fontSize: fontSize.base,
        borderColor: colors.accent,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 6,
        color: colors.text,
        backgroundColor: colors.background,
        // elevation: 5,
    },
    link: {
        color: colors.info,
        fontWeight: '600',
        fontSize: fontSize.sm,
    },
})

export default new Form