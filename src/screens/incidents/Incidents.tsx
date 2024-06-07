import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IncidentsMap from './components/map'

export default function Incidents() {
    return (
        <View style={styles.container}>
            <IncidentsMap />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})