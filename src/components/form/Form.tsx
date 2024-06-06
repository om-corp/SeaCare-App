import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fontSize } from '~/lib/theme'
import Button from '../button'
import { InputProps, LinkProps } from './form-props'
import { ButtonFilledProps } from '../button/button-props'

class Form {
    Container = ({ children }: any) => (
        <View>
            {children}
        </View>
    )

    Input = ({ label, placeholder, value, onChangeText, secureTextEntry = false }: InputProps) => (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={colors.accent}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )

    Link = ({ label, text, onPress }: LinkProps) => (
        <View style={{ flexDirection: 'row', gap: 5, marginBottom: 20 }}>
            <Text style={{ fontSize: fontSize.sm }}>{label}</Text>
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
        marginBottom: 20,
    },
    input: {
        fontSize: fontSize.base,
        borderColor: colors.accent,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 20,
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