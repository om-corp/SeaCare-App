import React, { useState } from "react";

/* COMPONENTS */
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import EventItem from "./components/event-item";
import { EventProps } from "./components/event-item/event-props";
import LoadingScreen from "~/components/loading-screen";


export default function EventsScreen() {
    const [eventList, setEventList] = useState<EventProps[] | null>(null);

    /** 
     * TODO: FIX EVENT SEARCH BUG 
     * - [ X ] Event data found
     * - [ X ] Quantity of events rendered
     * - [ ] Event data rendered (FIX)
    */
    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         const eventsCollection = collection(firestore, 'events')
    //         const eventsSnapshot = await getDocs(eventsCollection);
    //         const productsList = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data })) as EventProps[]
    //         setEventList(productsList)
    //     }

    //     fetchEvents();
    // }, [])

    if (!eventList) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={eventList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <EventItem id={item.id} date={item.date} imageUrl={item.imageUrl} name={item.name} summary={item.summary} volunteers={item.volunteers} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})