import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "~/screens/app/feed";

export type RootTabParamList = {
    Feed: undefined;
    Perfil: undefined;
    Config: undefined;
    EventList: undefined;
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
                tabBarBadge: '+99',
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="newspaper" color={color} size={size} /> : <Ionicons name="newspaper-outline" color={color} size={size} />
            }} />
        </Tab.Navigator>
    );
}

