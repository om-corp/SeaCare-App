import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventsScreen from "~/screens/events-screen";
import Home from "~/screens/home";

export type RootTabParamList = {
    Home: undefined;
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
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="home" color={color} size={size} /> : <Ionicons name="home-outline" color={color} size={size} />
            }} />
            <Tab.Screen name="Eventos" component={EventsScreen} options={{
                tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="calendar" color={color} size={size} /> : <Ionicons name="calendar-outline" color={color} size={size} />
            }} />
        </Tab.Navigator>
    );
}

