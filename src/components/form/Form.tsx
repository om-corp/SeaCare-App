import React from 'react'

/* COMPONENTS */
import { StyleSheet, Text, View } from 'react-native'
import { LinkProps } from './form-props'
import { InputProps } from '../input/input-props'
import ButtonProps, { ButtonFilledProps } from '../button/button-props'
import Input from '../input'
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
        <Input
            icon={icon}
            label={label}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    )

    Link = ({ label, text, onPress }: LinkProps) => (
        <View style={{ flexDirection: 'row', gap: 5 }}>
            {label ? <Text style={{ fontSize: fontSize.sm, color: colors.text }}>{label}</Text> : <></>}
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
    link: {
        color: colors.info,
        fontWeight: '600',
        fontSize: fontSize.sm,
    },
})

export default new Form