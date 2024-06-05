import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { theme } from "~/lib/theme";
import EventsScreen from "~/screens/app/events-screen";

import Feed from "~/screens/app/feed";

export type RootTabParamList = {
    Feed: undefined;
    Perfil: undefined;
    Config: undefined;
    Eventos: undefined;
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
            <Tab.Screen name="Feed" component={Feed} options={{
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="newspaper" color={color} size={size} /> : <Ionicons name="newspaper-outline" color={color} size={size} />
            }} />
            <Tab.Screen name="Eventos" component={EventsScreen} options={{
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="calendar" color={color} size={size} /> : <Ionicons name="calendar-outline" color={color} size={size} />
            }} />
        </Tab.Navigator>
    );
}

