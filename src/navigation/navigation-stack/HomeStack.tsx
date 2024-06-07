import React from 'react';

/* NAVIGATION */
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/screens/home';
import Incidents from '~/screens/incidents';
import GobackHeader from '~/components/header/goback';
import { colors } from '~/lib/theme';


export type HomeStackParamList = {
    Overview: undefined;
    Incidents: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Overview'>
            <Stack.Screen name='Overview' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Incidents' component={Incidents} options={({navigation}) => ({
                header: () => <GobackHeader navigation={navigation} color={colors.black}/>
            })}/>
        </Stack.Navigator>
    )
}