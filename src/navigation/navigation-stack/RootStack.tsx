import React from "react";

/* NAVIGATION */
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RootBottomTabs from "../navigation-bottom-tabs";

/* DATA */
import UserProvider from "~/provider/user-provider";

/* SCREENS */
import Access from "~/screens/access";
import Signup from "~/screens/signup";
import Login from "~/screens/login";

/* STYLE */
import theme from "~/lib/theme";

export type RootStackParamList = {
    Access: undefined;
    Cadastro: undefined;
    Login: undefined;
    App: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
    return (
        <UserProvider>
            <Stack.Navigator initialRouteName="Access">
                <Stack.Screen name="Access" component={Access} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="App" component={RootBottomTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </UserProvider>
    );
}