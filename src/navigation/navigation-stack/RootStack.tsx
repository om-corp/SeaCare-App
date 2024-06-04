import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserProvider from "~/provider/user-provider";

import Access from "~/screens/access";
import Signup from "~/screens/signup";
import Login from "~/screens/login";
import RootBottomTabs from "../navigation-bottom-tabs";

export type RootStackParamList = {
    Access: undefined;
    Cadastro: undefined;
    Login: undefined;
    App: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <NavigationContainer>
            <UserProvider>
                <Stack.Navigator initialRouteName="Access">
                    <Stack.Screen name="Access" component={Access} options={{ headerShown: false }} />
                    <Stack.Screen name="Cadastro" component={Signup} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="App" component={RootBottomTabs} />
                </Stack.Navigator>
            </UserProvider>
        </NavigationContainer>
    );
}