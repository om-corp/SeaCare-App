import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { EventStackParamList } from '~/navigation/navigation-stack/EventStack';
import { colors, fontSize } from '~/lib/theme';
import Button from '~/components/button';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenNavigationProps = {
    navigation: StackNavigationProp<EventStackParamList, 'Overview'>;
    route: RouteProp<EventStackParamList, "Details">;
}

export default function Details({ navigation, route }: ScreenNavigationProps) {
    const { name, imageUrl, summary } = route.params;

    const handleVolunteer = () => {
        Alert.alert('Muito obrigado!', `Você se voluntariou ao evento "${name}" com sucesso!`)
        // navigation.navigate('Overview')
    }

    return (
        <View>
            <Image source={{ uri: imageUrl }} height={350} />
            <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.summary}>{summary}</Text>
                <Button.Filled title='Se voluntariar' onPress={() => handleVolunteer()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: fontSize.xl,
        fontWeight: '600',
    },
    container: {
        color: colors.text,
        gap: 20,
        padding: 20,
    },
    summary: {
        color: colors.text,
        fontSize: fontSize.base,
    }
})