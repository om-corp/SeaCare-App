import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { colors } from '~/lib/theme'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '~/utils/firebase'
import { IncidentProps } from '../incident-props'
import LoadingScreen from '~/components/loading-screen'

export default function IncidentesMap() {
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
    )
}

const styles = StyleSheet.create({})