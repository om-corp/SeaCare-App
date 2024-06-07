import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* SCREENS */
import EventsScreen from "~/screens/events-screen";
import Home from "~/screens/home";
import Profile from "~/screens/profile";


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
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: { elevation: 0 }
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="home" color={color} size={size} /> : <Ionicons name="home-outline" color={color} size={size} />
            }} />
            <Tab.Screen name="Events" component={EventsScreen} options={{
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="calendar" color={color} size={size} /> : <Ionicons name="calendar-outline" color={color} size={size} />
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                title: 'Perfil',
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="person" color={color} size={size} /> : <Ionicons name="person-outline" color={color} size={size} />
            }} />
        </Tab.Navigator>
    );
}

