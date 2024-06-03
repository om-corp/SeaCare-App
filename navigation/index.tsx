import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Overview from "../screens/overview";
import Details from "../screens/details";
import { BackButton } from '../components/BackButton';

export type RootStackParamList = {
	Overview: undefined;
	Details: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Overview">
				<Stack.Screen name="Overview" component={Overview} />
				<Stack.Screen
					name="Details"
					component={Details}
					options={({ navigation }) => ({
						headerLeft: () => <BackButton onPress={navigation.goBack} />,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

