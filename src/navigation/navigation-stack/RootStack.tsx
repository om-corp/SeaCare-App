import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserProvider from "~/provider/user-provider";

import Access from "~/screens/access";
import Signup from "~/screens/signup";
import Login from "~/screens/login";
import RootBottomTabs from "../navigation-bottom-tabs";
import { theme } from "~/lib/theme";

export type RootStackParamList = {
    Access: undefined;
    Cadastro: undefined;
    Login: undefined;
    App: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <NavigationContainer theme={theme}>
            <UserProvider>
                <Stack.Navigator initialRouteName="Access">
                    <Stack.Screen name="Access" component={Access} options={{ headerShown: false }} />
                    <Stack.Screen name="Cadastro" component={Signup} options={{ headerTransparent: true }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerTransparent: true }} />
                    <Stack.Screen name="App" component={RootBottomTabs} options={{ headerShown: false }} />
                </Stack.Navigator>
            </UserProvider>
        </NavigationContainer>
    );
}