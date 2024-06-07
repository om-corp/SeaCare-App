import React from 'react';

/* NAVIGATION */
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

/* SCREENS */
import EventsScreen from '~/screens/events-screen';
import Details from '~/screens/events-screen/details';

/* MISC */
import { EventProps } from '~/screens/events-screen/components/event-item/event-props';
import { Feather } from '@expo/vector-icons';
import { colors } from '~/lib/theme';


export type EventStackParamList = {
    Overview: undefined;
    Details: EventProps;
};

const Stack = createStackNavigator<EventStackParamList>();


export default function EventStack() {
    return (
        <Stack.Navigator initialRouteName='Overview' >
            <Stack.Screen name='Overview' component={EventsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Details' component={Details} options={({ navigation, route }) => ({
                headerTitle: '',
                headerTransparent: true,
                headerLeft: () => (
                    <Feather
                        name='arrow-left'
                        color={colors.background}
                        size={50}
                        onPress={() => navigation.goBack()}
                    />
                ),
                headerLeftContainerStyle: { position: 'absolute', left: 10, top: 20},
            })} />
        </Stack.Navigator>
    )
}