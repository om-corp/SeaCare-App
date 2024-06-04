import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import UserProvider from "~/provider/user-provider";

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
        <NavigationContainer>
            <UserProvider>
                <Tab.Navigator>
                    <Tab.Screen name="Feed" component={Feed} />
                </Tab.Navigator>
            </UserProvider>
        </NavigationContainer>
    );
}

