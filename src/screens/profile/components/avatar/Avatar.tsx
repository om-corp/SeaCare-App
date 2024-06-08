import React, { useContext, useState } from 'react'
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors, fontSize } from '~/lib/theme'
import * as ImagePicker from 'expo-image-picker'
import { AvatarProps } from './avatar-props'
import AvatarImage from './AvatarImage'
import Background from '../background'

export default function Avatar({ username, email, style, phone }: AvatarProps & ViewProps) {

    const [profilePicture, setProfilePicture] = useState('');

    const uploadImage = async () => {
        try {
            await ImagePicker.requestCameraPermissionsAsync();
            let result = await ImagePicker.launchCameraAsync({
                cameraType: ImagePicker.CameraType.front,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                await saveImage(result.assets[0].uri)
            }
        } catch (error) {
            Alert.alert('Error uploading image')
        }
    }

    const saveImage = async (image: string) => {
        try {
            setProfilePicture(image)
        } catch (error) {
            throw error;
        }
    }

    return (
        <View style={[style]}>
            <Background />
            <View style={{ alignSelf: 'center', marginTop: 120, marginBottom: 20, }}>
                <View style={{ alignItems: 'center' }}>
                    <AvatarImage onPress={() => uploadImage()} />
                </View>
                {username ? <Text style={styles.title}>{username}</Text> : <ActivityIndicator size={14} color={colors.text} />}
                {email ? <Text style={styles.text} numberOfLines={1}>{email}</Text> : <ActivityIndicator size={14} color={colors.text} />}
                {phone ? <Text style={styles.text} numberOfLines={1}>{phone}</Text> : <></>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        color: colors.text,
        fontSize: fontSize.xl,
        fontWeight: '600',
        marginTop: 10
    },
    text: {
        alignSelf: 'center',
        color: colors.border,
        fontSize: fontSize.sm,
        fontWeight: '600',
        marginTop: 10
    }
})