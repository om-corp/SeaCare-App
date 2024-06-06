import React, { useEffect, useState } from 'react'

/* COMPONENTS */
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { IncidentProps } from './incident-props'
import LoadingScreen from '~/components/loading-screen'

/* DATA */
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '~/utils/firebase'

/* STYLE */
import { colors } from '~/lib/theme'

export default function Home() {
    const [incidents, setIncidents] = useState<IncidentProps[] | null>(null)

    useEffect(() => {

        const fetchIncidents = async () => {
            const incidentsCollection = collection(firestore, 'incidentes')
            const incidentsSnapshot = await getDocs(incidentsCollection)
            const incidentsList = incidentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as IncidentProps[]
            setIncidents(incidentsList)
        }

        fetchIncidents()

    }, [])

    if (!incidents) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE}>
                {incidents.map(({ id, location, name, priority }) => {
                    const iconColor = priority === 1 ? colors.info : priority === 2 ? colors.warning : priority === 3 ? colors.error : colors.accent

                    return (
                        <Marker key={id} coordinate={{ latitude: location.latitude, longitude: location.longitude }}>
                            <Ionicons name='location-sharp' size={25} color={iconColor} />
                        </Marker>
                    )
                })}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
})