import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Access from "~/screens/Access";
import Cadastro from "~/screens/Cadastro";
import Login from "~/screens/Login";

export type RootStackParamList = {
	Access: undefined;
	Cadastro: undefined;
	Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Access">
				<Stack.Screen name="Access" component={Access} options={{ headerShown: false }} />
				<Stack.Screen name="Cadastro" component={Cadastro} />
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

