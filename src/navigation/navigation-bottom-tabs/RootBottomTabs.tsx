import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* SCREENS */
import EventsScreen from "~/screens/events-screen";
import Home from "~/screens/home";
import Profile from "~/screens/profile";
import { fontSize } from "~/lib/theme";
import { EventProps } from "~/screens/events-screen/components/event-item/event-props";
import EventStack from "../navigation-stack/EventStack";
import HomeStack from "../navigation-stack/HomeStack";


export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
    Events: undefined;
    Shop: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootBottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                fontSize: fontSize.xs,
                fontWeight: '600',
            },
            tabBarStyle: {
                elevation: 0,
            },
            headerTitleStyle: {
                fontSize: 32,
                fontWeight: '600'
            }
        }}>
            <Tab.Screen name="Home" component={HomeStack} options={{
                title: 'Início',
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="home" color={color} size={size} /> : <Ionicons name="home-outline" color={color} size={size} />
            }} />
            <Tab.Screen name="Events" component={EventStack} options={{
                title: 'Eventos',
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="calendar" color={color} size={size} /> : <Ionicons name="calendar-outline" color={color} size={size} />
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                title: 'Perfil',
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="person" color={color} size={size} /> : <Ionicons name="person-outline" color={color} size={size} />
            }} />
        </Tab.Navigator >
    );
}

