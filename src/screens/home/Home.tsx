import React from 'react'
import { View, StyleSheet, Image, Alert, } from 'react-native'
import { SmallButton } from '~/components/button'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootTabParamList } from '~/navigation'
import { HomeStackParamList } from '~/navigation/navigation-stack/HomeStack'

type NavigationProps = StackNavigationProp<RootTabParamList, 'Home'>
type HomeNavigationProps = StackNavigationProp<HomeStackParamList, 'Overview'>

export default function Home() {

    const navigation = useNavigation<NavigationProps>();
    const homeNavigation = useNavigation<HomeNavigationProps>();


    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://cdn.vectorstock.com/i/500p/23/47/welcome-ribbon-banner-vector-47282347.jpg' }} style={styles.banner} />
            <View style={styles.buttonList}>
                <SmallButton title='Eventos' onPress={() => navigation.navigate('Events')} source={require('~/assets/home/calendario.png')} />
                <SmallButton title='Concluídos' onPress={() => Alert.alert('WIP', 'Área em desenvolvimento.')} source={require('~/assets/home/participacao.png')} />
                <SmallButton title='Loja' onPress={() => Alert.alert('WIP', 'Área em desenvolvimento.')} source={require('~/assets/home/etiqueta-de-preco.png')} />
                <SmallButton title='Registrar Incidente' onPress={() => Alert.alert('WIP', 'Área em desenvolvimento.')} source={require('~/assets/home/camera.png')} />
                <SmallButton title='Incidentes' onPress={() => homeNavigation.navigate('Incidents')} source={require('~/assets/home/mapa.png')} />
                <SmallButton title='Perfil' onPress={() => navigation.navigate('Profile')} source={require('~/assets/home/pessoa.png')} />
                {/* <View style={styles.button}>
                    <Image style={styles.icon} source={require('~/assets/home/calendario.png')} />
                    <Text style={styles.buttonText}>Eventos</Text>
                </View>
                <View style={styles.button}>
                    <Image style={styles.icon} source={require('~/assets/home/participacao.png')} />
                    <Text style={styles.buttonText}>Concluídos</Text>
                </View>
                <View style={styles.button}>
                    <Image style={styles.icon} source={require('~/assets/home/etiqueta-de-preco.png')} />
                    <Text style={styles.buttonText}>Loja</Text>
                </View>
                <View style={styles.button}>
                    <Image style={styles.icon} source={require('~/assets/home/camera.png')} />
                    <Text style={styles.buttonText}>Registrar Incidente</Text>
                </View>
                <View style={styles.button}>
                    <Image style={styles.icon} source={require('~/assets/home/mapa.png')} />
                    <Text style={styles.buttonText}>Incidentes</Text>
                </View>
                <View style={styles.button}>
                    <Image style={styles.icon} source={require('~/assets/home/pessoa.png')} />
                    <Text style={styles.buttonText}>Perfil</Text>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
    },
    banner: {
        borderRadius: 10,
        height: 120,
        marginBottom: 20,
    },
    buttonList: {
        gap: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
})