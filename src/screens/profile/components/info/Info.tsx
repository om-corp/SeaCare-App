import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors, fontSize } from '~/lib/theme'
import InfoProps from './info-props'

export default function Info({ info, iconName, isSecure = false, editable = false }: InfoProps) {
    if (isSecure) info = '*'.repeat(info.length)

    return (
        <View style={styles.infoContainer}>
            <Feather size={20} color={colors.border} name={iconName} />
            <Text style={[styles.info, editable ? {width: '74%'} : {width: '80%'}]} numberOfLines={1}>{info}</Text>
            {editable ? <Feather style={styles.editInfo} size={20} color={colors.border} name='edit' /> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.accent,
        flexDirection: 'row',
        gap: 20,
        paddingVertical: 20,
    },
    info: {
        color: colors.border,
        fontSize: fontSize.base,
        fontWeight: '600',
    },
    editInfo: {
        position: 'absolute',
        right: 20
    }
})